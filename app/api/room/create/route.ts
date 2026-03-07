import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const {
    name,
    description,
    isPrivate,
    RoomPassword,
    ownerId,
    title,
    url,
    thumbnail,
  } = await request.json();

  const room = await prisma.$transaction(async (tx) => {
    const playlist = await tx.playlist.create({
      data: {
        title: `${name}'s Playlist`,
        videos: {
          create: {
            title: title,
            url: `https://www.youtube.com/watch?v=${url}`,
            thumbnail: thumbnail,
            order: 0,
          },
        },
      },
    });

    const room = await tx.room.create({
      data: {
        name,
        description,
        isPrivate,
        RoomThumbnail: thumbnail,
        RoomPassword: RoomPassword ?? null,
        ownerId,
        playlistId: playlist.id,
      },
    });
    return room;
  });

  return Response.json(room, { status: 201 });
}

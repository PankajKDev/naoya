import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, description, isPrivate, RoomPassword, ownerId } =
    await request.json();

  const room = await prisma.$transaction(async (tx) => {
    const playlist = await tx.playlist.create({
      data: {
        title: `${name}'s Playlist`,
      },
    });

    const room = await tx.room.create({
      data: {
        name,
        description,
        isPrivate,
        RoomPassword: RoomPassword ?? null,
        ownerId,
        playlistId: playlist.id,
      },
    });
    return room;
  });

  return Response.json(room, { status: 201 });
}

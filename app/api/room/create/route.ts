import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, description, isPrivate, RoomPassword, ownerId } =
    await request.json();
  const sampleVideo = "https://youtu.be/dQw4w9WgXcQ?si=EuV000Wg-T-yzSCi";
  const newRoom = await prisma.room.create({
    data: {
      name,
      description,
      isPrivate,
      RoomPassword,
      currentVideo: sampleVideo,
      owner: {
        connect: {
          clerkId: ownerId,
        },
      },
    },
  });

  return NextResponse.json(
    {
      message: "room created",
      data: newRoom.id,
    },
    {
      status: 201,
    },
  );
}

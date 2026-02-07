import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId: ownerId } = await auth();
  if (!ownerId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { name, description, isPrivate, RoomPassword, currentVideo } =
    await request.json();
  const newRoom = await prisma.room.create({
    data: { name, description, isPrivate, RoomPassword, currentVideo, ownerId },
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

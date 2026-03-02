import { headers } from "next/headers";
import { Webhook } from "svix";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type ClerkWebhookEvent = {
  data: {
    id: string;
  };
  type: string;
};

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Missing CLERK_WEBHOOK_SECRET");
  }

  const headerPayload = await headers();

  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new NextResponse("Missing webhook headers", { status: 400 });
  }

  const payload = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET);

  let event: ClerkWebhookEvent;

  try {
    event = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkWebhookEvent;
  } catch (err) {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  // Handle user created
  if (event.type === "user.created") {
    const { id } = event.data;

    await prisma.user.create({
      data: {
        clerkId: id,
      },
    });
  }

  // Optional: handle user deleted
  if (event.type === "user.deleted") {
    const { id } = event.data;

    await prisma.user.delete({
      where: { clerkId: id },
    });
  }

  return NextResponse.json({ success: true });
}

"use client";
import { useFormDataStore } from "@/stores/formDataStore";
import { useVideoDataStore } from "@/stores/videoDataStore";
import { useUser } from "@clerk/nextjs";
import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

function RoomButton() {
  const user = useUser();
  const { name, description, isPrivate, RoomPassword } = useFormDataStore();
  const router = useRouter();

  const { title, url, thumbnail } = useVideoDataStore();
  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/room/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          isPrivate,
          RoomPassword,
          ownerId: user.user?.id,
          title,
          url,
          thumbnail,
        }),
      });
      if (res) {
        router.push("/rooms");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => handleSubmit()}
        className="w-[80%] mt-10 bg-primary hover:bg-primary/90 text-white font-black text-xl py-6 rounded-xl shadow-xl shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4"
      >
        Launch Room Now
        <span className="text-white text-3xl">
          <Rocket />
        </span>
      </button>
    </div>
  );
}

export default RoomButton;

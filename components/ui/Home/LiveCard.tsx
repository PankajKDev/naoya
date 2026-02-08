import { currentUser } from "@clerk/nextjs/server";
import { Play } from "lucide-react";
import Image from "next/image";

async function LiveCard() {
  const user = await currentUser();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="group flex flex-col gap-3 cursor-pointer">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
          <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-red-600 rounded text-xs font-bold text-white flex items-center gap-1 shadow-md">
            <span className="size-1.5 rounded-full bg-white animate-pulse"></span>
            LIVE
          </div>
          <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold text-white flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">group</span>
            1.2k
          </div>
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            data-alt="Anime characters in a futuristic city setting with neon lights"
          ></div>

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="size-12 rounded-full bg-primary/90 text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">
                <Play />
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="size-10 rounded-full bg-slate-700 shrink-0 overflow-hidden">
            <Image
              width={24}
              height={24}
              alt="Host Avatar"
              className="w-full h-full object-cover"
              src={user?.imageUrl || "/default-avatar.png"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-1">
              Late Night Anime Marathon
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Host: @PixelKate
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 bg-slate-200 dark:bg-card-dark px-1.5 py-0.5 rounded">
                Anime
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 bg-slate-200 dark:bg-card-dark px-1.5 py-0.5 rounded">
                Action
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveCard;

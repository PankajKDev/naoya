"use client";
import { Music2, SparklesIcon, TvIcon, VideoOffIcon } from "lucide-react";
import AddYoutubeContent from "./AddYoutubeContent";
import { useVideoDataStore } from "@/stores/videoDataStore";
import Image from "next/image";
function SelectContent() {
  const { title, url, thumbnail } = useVideoDataStore();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="lg:w-[60%] w-[80%] flex justify-between  h-full  items-center  ">
        {/* Youtube icon */}
        <AddYoutubeContent />
        {/* Anime */}
        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-teal-500 justify-center flex items-center">
            <SparklesIcon color="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>
        {/* Music */}
        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-orange-500 justify-center flex items-center">
            <Music2 color="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>

        {/* Series */}

        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-green-600 justify-center flex items-center">
            <TvIcon color="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>
      </div>
      {!url ? (
        <div className="w-full flex justify-center items-center flex-col h-32 bg-gray-800 border-2 border-gray-600 rounded-xl border-dotted mt-5">
          <VideoOffIcon size={40} color="gray" />
          <h2 className="text-gray-400">No Video Selected</h2>
          <h3 className="text-gray-600 text-sm">
            Select a category above to get started
          </h3>
        </div>
      ) : (
        <div className="w-full flex items-center gap-4 h-32 bg-gray-800 border border-gray-700 rounded-xl p-4 mt-5">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={title || "Video thumbnail"}
              width={256}
              height={256}
              className="w-40 h-full object-cover rounded-lg"
            />
          )}

          <div className="flex flex-col justify-center">
            <h2 className="text-gray-200 font-semibold line-clamp-2">
              {title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectContent;

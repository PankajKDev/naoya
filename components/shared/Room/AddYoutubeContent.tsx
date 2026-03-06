"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PlayIcon, Search, X } from "lucide-react";
import ContentRow from "./ContentRow";
import { searchYoutubeVideos } from "@/lib/actions";
import { YoutubeVideo } from "@/types";
import { useFormDataStore } from "@/stores/formDataStore";

export default function AddYoutubeContent() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [videos, setVideos] = useState<YoutubeVideo[] | null>(null);
  const [open, setOpen] = useState(false);
  const setVideoFields = useFormDataStore((state) => state.setField);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setHasSearched(true);
    const fetchedVideos = await searchYoutubeVideos(query);
    setVideos(fetchedVideos);
  };

  const onSelect = async (url: string, img: string) => {
    setVideoFields("currentVideo", url);
    setVideoFields("currentVideoThumbnail", img);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-red-700 justify-center flex items-center">
            <PlayIcon color="#ffffff" fill="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[70vh] bg-[#1A1A1E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <Dialog.Title className="text-white font-semibold text-lg">
              Add Content
            </Dialog.Title>
            <Dialog.Close className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </Dialog.Close>
          </div>

          <div className="flex-1 flex flex-col p-6 min-h-0 overflow-hidden">
            <div className="relative max-w-2xl mx-auto w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search YouTube or paste URL..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="w-full bg-[#252529] border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {!hasSearched && (
              <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                Start typing to search YouTube content
              </div>
            )}

            {hasSearched && videos && (
              <div className="mt-6 flex-1 min-h-0 overflow-y-auto space-y-3 pr-2">
                {videos.map((item: YoutubeVideo) => (
                  <ContentRow
                    key={item.title}
                    title={item.title}
                    time={item.time}
                    img={item.img}
                    channelTitle={item.channelTitle}
                    publishedAt={item.publishedAt}
                    onSelect={() => onSelect(item.id, item.img)}
                  />
                ))}
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

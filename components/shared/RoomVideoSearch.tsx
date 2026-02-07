import { Tv2, Music, Film, ChevronDown } from "lucide-react";
import SearchBar from "../ui/RoomComponent/SearchBar";
import FilterTabs from "../ui/RoomComponent/FilterTabs";
import ResultCard from "../ui/RoomComponent/ResultCard";

export default function RoomVideoSearch() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm italic">
          1
        </span>
        <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
          Select Content
        </h2>
      </div>

      <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-border-dark shadow-sm">
        <SearchBar />
        <FilterTabs />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ResultCard
            title="League Finals 2024 - Full Match"
            meta="LoL Esports • 1.2M views"
            type="YouTube"
            duration="24:15"
            icon={<Tv2 className="size-4" />}
            iconColor="text-red-500"
          />
          <ResultCard
            title="League of Legends Finals Party"
            meta="Host: Alex Rivera • 24 Watching"
            type="Live Room"
            isLive
            active
            icon={
              <span className="material-symbols-outlined text-base">
                sensors
              </span>
            }
            iconColor="text-purple-500"
          />
          <ResultCard
            title="Arcane S2 OST - Enemy"
            meta="Imagine Dragons • 3:45"
            type="Music"
            icon={<Music className="size-4" />}
            iconColor="text-green-500"
          />
          <ResultCard
            title="Arcane: Season 2 Trailer"
            meta="Netflix • 2 weeks ago"
            type="Trailers"
            duration="Trailer"
            icon={<Film className="size-4" />}
            iconColor="text-blue-500"
          />
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-border-dark flex justify-center">
          <button className="text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            <span>Show more results</span>
            <ChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

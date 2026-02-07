import { Book, Grid, Music4, Tv, Tv2Icon } from "lucide-react";

const FILTERS = [
  { id: "all", label: "All", icon: Grid, active: false },
  { id: "yt", label: "YouTube", icon: Tv, active: true },
  { id: "anime", label: "Anime", icon: Book, active: false },
  { id: "movies", label: "Movies", icon: Tv2Icon, active: false },
  { id: "music", label: "Music", icon: Music4, active: false },
];

export default function FilterTabs() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
          Results for &quot;League of Legends&quot;
        </h3>
        <div className="flex items-center gap-1 text-xs font-medium text-slate-500 cursor-pointer hover:text-primary">
          <span>Filters</span>
          <span className="material-symbols-outlined text-sm">tune</span>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {FILTERS.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                item.active
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-100 dark:bg-border-dark text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                <IconComponent />
              </span>
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

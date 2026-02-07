import { ChevronDown, X, Tv, Search, Music, Video, Globe } from "lucide-react";

const PROVIDERS = [
  {
    id: "youtube",
    label: "YouTube",
    icon: <Tv className="text-red-500 size-5" />,
  },
  {
    id: "twitch",
    label: "Twitch",
    icon: <Video className="text-purple-500 size-5" />,
  },
  {
    id: "spotify",
    label: "Spotify",
    icon: <Music className="text-green-500 size-5" />,
  },
  { id: "web", label: "Web", icon: <Globe className="text-blue-500 size-5" /> },
];

export default function SearchBar({ query = "League of Legends" }) {
  return (
    <div className="mb-6">
      <label className="flex flex-col w-full group relative z-10">
        <div className="flex w-full items-center rounded-xl h-14 bg-slate-100 dark:bg-border-dark border-2 border-transparent focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-surface-dark transition-all shadow-sm">
          {/* Provider Selector (Dropdown) */}
          <div className="relative h-full">
            <input
              type="checkbox"
              id="provider-toggle"
              className="peer hidden"
            />

            {/* Trigger Button */}
            <label
              htmlFor="provider-toggle"
              className="flex items-center gap-2 h-full pl-4 pr-3 text-slate-700 dark:text-slate-300 font-bold text-sm cursor-pointer hover:text-primary transition-colors border-r border-slate-200 dark:border-slate-700/50 select-none"
            >
              <Tv className="text-red-500 size-5" />
              <span className="hidden sm:block">YouTube</span>
              <ChevronDown className="size-4 opacity-50 transition-transform peer-checked:rotate-180" />
            </label>

            {/* Backdrop to close on outside click */}
            <label
              htmlFor="provider-toggle"
              className="fixed inset-0 z-10 hidden peer-checked:block cursor-default"
            />

            {/* Dropdown Menu */}
            <div className="absolute top-[calc(100%+8px)] left-0 w-48 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-xl z-20 overflow-hidden opacity-0 scale-95 pointer-events-none transition-all duration-100 peer-checked:opacity-100 peer-checked:scale-100 peer-checked:pointer-events-auto">
              <div className="p-1">
                {PROVIDERS.map((p) => (
                  <button
                    key={p.id}
                    className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {p.icon}
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <input
            readOnly
            className="flex-1 bg-transparent border-none text-slate-900 dark:text-white focus:ring-0 px-4 text-base font-medium placeholder:text-slate-500 h-full"
            placeholder="Search URL, keywords..."
            value={query}
          />

          <div className="hidden md:flex items-center pr-3 gap-1 shrink-0">
            <button className="size-10  flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 transition-colors">
              <X className="size-5" />
            </button>
            <button className="h-10 px-4 hidden sm:flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-transform">
              <Search />
            </button>
          </div>
        </div>
      </label>
    </div>
  );
}

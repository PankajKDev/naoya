function RoomCard() {
  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-28">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary">
            visibility
          </span>
          <h3 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-sm">
            Room Card Preview
          </h3>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-2xl transition-all duration-500 group">
          <div className="relative aspect-video">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              data-alt="eSports live stream high resolution preview"
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">
                Live
              </span>
              <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">
                4K HDR
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="size-8 rounded-full border-2 border-primary bg-cover bg-center"
                  data-alt="Host avatar small"
                ></div>
                <div>
                  <p className="text-white text-[10px] font-medium leading-none opacity-70">
                    HOSTED BY
                  </p>
                  <p className="text-white text-xs font-bold">Alex Rivera</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/20">
                <span className="material-symbols-outlined text-white text-xs fill-1">
                  person
                </span>
                <span className="text-white text-xs font-bold">1/50</span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-1 truncate">
              League of Legends Finals Party
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
              Join us for the most intense match of the year! Live commentary
              and chat included.
            </p>
            <div className="mt-6 flex items-center justify-between pt-5 border-t border-slate-100 dark:border-border-dark">
              <div className="flex -space-x-2">
                <div className="size-6 rounded-full border-2 border-white dark:border-surface-dark bg-slate-300 dark:bg-slate-700"></div>
                <div className="size-6 rounded-full border-2 border-white dark:border-surface-dark bg-slate-400 dark:bg-slate-600"></div>
                <div className="size-6 rounded-full border-2 border-white dark:border-surface-dark bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-slate-500">
                    +12
                  </span>
                </div>
              </div>
              <span className="text-primary text-xs font-bold">
                Public Room
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">info</span>
            <div className="flex-1">
              <p className="text-slate-900 dark:text-white text-sm font-bold mb-1">
                Room Duration
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                Your room will stay active as long as there is at least one
                person inside. Inactive rooms are deleted after 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;

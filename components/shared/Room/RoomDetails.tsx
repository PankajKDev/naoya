function RoomDetails() {
  return (
    <>
      <div className="flex  flex-col gap-3">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
          Room Name
        </label>
        <input
          readOnly
          className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-xl h-14 px-5 text-lg font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50"
          placeholder="e.g. Friday Movie Night"
          defaultValue="League of Legends Finals Party"
        />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
          Description (Optional)
        </label>
        <textarea
          className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-xl p-5 text-base text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 min-h-30 resize-none"
          placeholder="What are we watching? Tell your friends..."
        ></textarea>
      </div>
    </>
  );
}

export default RoomDetails;

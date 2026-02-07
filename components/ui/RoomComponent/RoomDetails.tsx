import React from "react";

function RoomDetails() {
  return (
    <div className="flex-1">
      <label className="text-xs font-bold text-slate-500 dark:text-slate-500 block mb-2 uppercase tracking-wider">
        Join Password
      </label>
      <input
        readOnly
        className="w-full bg-slate-200 dark:bg-border-dark/50 border-none rounded-lg h-10 px-4 text-slate-400"
        placeholder="••••••••"
        type="password"
      />
    </div>
  );
}

export default RoomDetails;

import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="flex-1 max-w-xl mx-auto hidden lg:block">
      <label className="flex w-full items-center gap-2 rounded-xl border border-transparent bg-slate-100 dark:bg-[#302839] px-3 py-2 transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        <span className="material-symbols-outlined text-slate-500 dark:text-[#ab9db9]">
          <Search />
        </span>
        <input
          className="w-full focus:outline-none bg-transparent border-none p-0 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-[#ab9db9] focus:ring-0"
          placeholder="Search for movies, rooms, or friends..."
          type="text"
        />
      </label>
    </div>
  );
}

export default SearchBar;

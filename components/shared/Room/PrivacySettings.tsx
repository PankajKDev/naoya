"use client";

import { ClipboardList, LockKeyholeOpenIcon } from "lucide-react";
import { useState } from "react";

function PrivacySettings() {
  const [isPrivate, setIsPrivate] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between">
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold text-lg">
            Room Accessibility
          </h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Decide who can discover and join your party.
          </p>
        </div>
        {/* privacy toggle */}
        <div className="flex p-1 h-12  bg-slate-100 dark:bg-border-dark rounded-3xl">
          <button
            onClick={() => setIsPrivate(false)}
            className={`px-6 py-2 rounded-3xl ${isPrivate ? "" : "bg-primary"}  text-white text-sm font-bold shadow-sm transition-all`}
          >
            Public
          </button>
          <button
            onClick={() => setIsPrivate(true)}
            className={`px-6 py-2 rounded-3xl  ${isPrivate ? "bg-primary" : ""} text-slate-400 text-sm font-bold hover:text-slate-700 dark:hover:text-white transition-all`}
          >
            Private
          </button>
        </div>
      </div>
      <div className="w-full flex h-32 mt-10 p-6 justify-between gap-5 bg-border-dark/30 rounded-xl border border-dashed border-slate-700  ">
        {isPrivate ? (
          <>
            <div className="flex  flex-col w-1/2">
              <label className="text-xs font-bold text-slate-100 block mb-2 uppercase tracking-wider">
                Join Password
              </label>
              <input
                className="w-full bg-border-dark/50 border-none rounded-lg h-10 px-4 text-slate-400"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-xs font-bold text-slate-100 block mb-2 uppercase tracking-wider">
                Invite link
              </label>
              <div className="w-full flex justify-between items-center bg-border-dark/50 border-none rounded-lg h-10 px-4 text-slate-400">
                <span>Copy Link</span>
                <ClipboardList />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex  flex-col w-1/2">
              <label className="text-xs font-bold text-slate-100 block mb-2 uppercase tracking-wider">
                Join Password
              </label>
              <div className="w-full justify-center items-center flex cursor-not-allowed bg-border-dark/50 border-none rounded-lg h-10 px-4 text-slate-400">
                <LockKeyholeOpenIcon />
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-xs font-bold text-slate-100 block mb-2 uppercase tracking-wider">
                Invite link
              </label>
              <div className="w-full flex justify-between items-center bg-border-dark/50 border-none rounded-lg h-10 px-4 text-slate-400">
                <span>Copy Link</span>
                <ClipboardList />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PrivacySettings;

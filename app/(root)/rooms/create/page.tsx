import RoomCard from "@/components/shared/RoomCard";
import RoomVideoSearch from "@/components/shared/RoomVideoSearch";
import PrivacyToggle from "@/components/ui/RoomComponent/PrivacyToggle";
import RoomDetails from "@/components/ui/RoomComponent/RoomDetails";
import { HelpCircle, Rocket } from "lucide-react";

function page() {
  return (
    <main className="max-w-300 mx-auto px-6 py-12">
      {/* create a room banner */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-tight mb-2">
            Create a Room
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal">
            Your personal theater for shared experiences. Configure your studio
            below.
          </p>
        </div>
        <button className="flex min-w-35 items-center justify-center rounded-xl h-11 px-6 bg-slate-200 dark:bg-surface-dark text-slate-800 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-border-dark transition-colors">
          <span className="material-symbols-outlined mr-2">
            <HelpCircle />
          </span>
          Tutorials
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {/* video search for room */}
          <RoomVideoSearch />
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm italic">
                2
              </span>
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
                Room Details
              </h2>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 border border-slate-200 dark:border-border-dark shadow-sm space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Room Name
                </label>
                <input
                  readOnly
                  className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-xl h-14 px-5 text-lg font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. Friday Movie Night"
                  value="League of Legends Finals Party"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Description (Optional)
                </label>
                <textarea
                  className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-xl p-5 text-base text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 min-h-30 resize-none"
                  placeholder="What are we watching? Tell your friends..."
                ></textarea>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm italic">
                3
              </span>
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
                Privacy Settings
              </h2>
            </div>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-8 border border-slate-200 dark:border-border-dark shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                    Room Accessibility
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Decide who can discover and join your party.
                  </p>
                </div>

                <PrivacyToggle />
              </div>
              <div className="p-6 bg-slate-50 dark:bg-border-dark/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 opacity-50 cursor-not-allowed">
                <div className="flex items-center gap-4">
                  <RoomDetails />
                  <div className="flex-1">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-500 block mb-2 uppercase tracking-wider">
                      Invite Link
                    </label>
                    <div className="w-full bg-slate-200 dark:bg-border-dark/50 border-none rounded-lg h-10 px-4 flex items-center justify-between">
                      <span className="text-slate-400 text-xs">
                        Only visible for private rooms
                      </span>
                      <span className="material-symbols-outlined text-sm text-slate-400">
                        lock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="pt-6">
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-black text-xl py-6 rounded-2xl shadow-xl shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4">
              Launch Room Now
              <span className="material-symbols-outlined text-3xl">
                <Rocket />
              </span>
            </button>
          </div>
        </div>

        <RoomCard />
      </div>
    </main>
  );
}

export default page;

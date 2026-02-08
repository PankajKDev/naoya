import { CircleQuestionMarkIcon } from "lucide-react";

function CreateRoomHeading() {
  return (
    <div className=" m-5 gap-5 flex flex-col">
      <h2 className="text-white text-5xl font-semibold">Create a Room</h2>
      <div className="w-full flex justify-between">
        <h1 className="text-slate-500 dark:text-slate-400 text-lg font-normal">
          Your personal theater for shared experiences. Configure your studio
          below.
        </h1>
        <button className="flex justify-center px-3 rounded-lg gap-1 w-36 h-10 items-center bg-slate-200 dark:bg-surface-dark text-slate-800 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-border-dark transition-colors">
          <CircleQuestionMarkIcon size={22} />
          Tutorials
        </button>
      </div>
    </div>
  );
}

export default CreateRoomHeading;

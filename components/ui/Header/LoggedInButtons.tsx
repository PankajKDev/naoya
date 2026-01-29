import { UserButton } from "@clerk/nextjs";
import { Bell, HouseIcon, LibraryBig } from "lucide-react";

function LoggedInButtons() {
  return (
    <div className="flex gap-5">
      <button className="size-10 cursor-pointer flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-[#302839] text-slate-900 dark:text-white transition-colors relative">
        <Bell />

        <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-background-dark"></span>
      </button>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="My Library"
            labelIcon={<LibraryBig size={16} />}
            href="/library"
          />
          <UserButton.Link
            label="My Rooms"
            labelIcon={<HouseIcon size={16} />}
            href="/rooms"
          />
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
}

export default LoggedInButtons;

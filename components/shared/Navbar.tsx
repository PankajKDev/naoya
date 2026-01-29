"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SearchBar from "../ui/Header/SearchBar";
import LoggedInButtons from "../ui/Header/LoggedInButtons";
import AuthButtons from "../ui/Header/AuthButtons";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky flex justify-center items-center h-16 top-0 z-50 w-full border-b  border-solid border-gray-700  bg-background-dark/80 backdrop-blur-md">
      <nav className="w-[80%] justify-between  h-full flex items-center">
        <Link href="/">
          <div className="flex items-center gap-3">
            <h3 className="bg-primary active:scale-95 hover:bg-orange-400 transition-all ease-in-out duration-300  cursor-pointer  text-white text-sm py-2 px-2  rounded-xl ">
              直也
            </h3>
            <h2 className="text-white text-lg font-semibold">Naoya</h2>
          </div>
        </Link>
        <SignedIn>
          <SearchBar />

          <LoggedInButtons />
        </SignedIn>
        <SignedOut>
          <AuthButtons />
        </SignedOut>
      </nav>
    </header>
  );
}

export default Navbar;

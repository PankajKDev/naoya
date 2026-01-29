import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-dark min-h-screen items-center flex flex-col">
      <Navbar />
      <div className="w-full lg:w-[90%]">{children}</div>
    </div>
  );
}

export default layout;

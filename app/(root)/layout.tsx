import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}

export default layout;

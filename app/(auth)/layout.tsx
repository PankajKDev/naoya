import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-background-dark flex justify-center items-center">
      {children}
    </div>
  );
}

export default layout;

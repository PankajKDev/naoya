import { ReactNode } from "react";

function Section({
  SectionChild,
  childNumber,
  sectionTitle,
}: {
  SectionChild: ReactNode;
  childNumber: number;
  sectionTitle: string;
}) {
  return (
    <>
      <div className="flex my-10 gap-5 items-center">
        <span className="bg-primary w-5  h-5 flex justify-center items-center rounded-2xl p-4 text-white">
          {childNumber}
        </span>
        <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
          {sectionTitle}
        </h2>
      </div>
      <div className="bg-surface-dark h-full p-5  rounded-lg">
        {SectionChild}
      </div>
    </>
  );
}

export default Section;

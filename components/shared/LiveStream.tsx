import { ArrowRight, Flame } from "lucide-react";
import LiveCard from "../ui/LiveCard";

function LiveStream() {
  return (
    <section className="flex flex-col gap-6 mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <span className=" text-primary">
            <Flame size={32} />
          </span>
          Live Now
        </h2>
        <a
          className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-1"
          href="#"
        >
          View All{" "}
          <span className="material-symbols-outlined text-sm">
            <ArrowRight />
          </span>
        </a>
      </div>
      {/*  card */}
      <LiveCard />
    </section>
  );
}

export default LiveStream;

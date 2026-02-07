import { ReactNode } from "react";

export interface ResultCardProps {
  title: string;
  meta: string;
  type: string;
  icon: ReactNode;
  iconColor: string;
  thumbnailUrl?: string;
  duration?: string;
  isLive?: boolean;
  active?: boolean;
}

export default function ResultCard({
  title,
  meta,
  type,
  icon,
  iconColor,
  duration,
  isLive,
  active,
}: ResultCardProps) {
  return (
    <div
      className={`group flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-primary/30 hover:bg-white dark:hover:bg-border-dark transition-all cursor-pointer ${active ? "ring-1 ring-primary/20" : ""}`}
    >
      <div
        className={`relative w-32 aspect-video rounded-lg overflow-hidden shrink-0 ${active ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-surface-dark" : ""}`}
      >
        <div className="absolute inset-0 bg-cover bg-center bg-slate-200 dark:bg-slate-800 transition-transform group-hover:scale-110"></div>
        {isLive && (
          <span className="absolute top-1 left-1 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
            Live
          </span>
        )}
        {duration && (
          <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1 rounded">
            {duration}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <h4 className="text-slate-900 dark:text-white font-bold text-sm leading-tight mb-1 truncate group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-slate-500 text-xs mb-2">{meta}</p>
        <div className="flex items-center gap-1.5">
          <span className={`${iconColor} flex items-center`}>{icon}</span>
          <span className="text-[10px] font-bold uppercase text-slate-400">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

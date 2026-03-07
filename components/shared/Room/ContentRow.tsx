import Image from "next/image";

interface ContentRowProps {
  title: string;

  img: string;
  channelTitle: string;
  publishedAt: string;
  onSelect: () => void;
}

export default function ContentRow({
  title,

  img,
  channelTitle,
  publishedAt,
  onSelect,
}: ContentRowProps) {
  const date = new Date(publishedAt);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      onClick={onSelect}
      className="group flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
    >
      <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-md border border-white/10 bg-[#252529]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <h4 className="truncate text-sm font-medium text-white transition-colors group-hover:text-[#9D7DFF]">
          {title}
        </h4>
        <p className="mt-1 truncate text-xs text-gray-400">{channelTitle}</p>
        <p className="mt-1 truncate text-[9px] text-gray-400">
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

import {
  Music2,
  PlayIcon,
  SparklesIcon,
  TvIcon,
  VideoOffIcon,
} from "lucide-react";

function SelectContent() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="lg:w-[60%] w-[80%] flex justify-between  h-full  items-center  ">
        {/* Youtube icon */}
        <div className="flex gap-2  flex-col">
          <div className="w-16 h-16 rounded-full bg-red-700 justify-center flex items-center">
            <PlayIcon color="#ffffff" fill="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>
        {/* Anime */}
        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-teal-500 justify-center flex items-center">
            <SparklesIcon color="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>
        {/* Music */}
        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-orange-500 justify-center flex items-center">
            <Music2 color="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>

        {/* Series */}

        <div className="flex gap-2 flex-col">
          <div className="w-16 h-16 rounded-full bg-green-600 justify-center flex items-center">
            <TvIcon color="#ffffff" />
          </div>
          <span className="text-gray-400">Youtube</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col h-32 bg-gray-800 border-2 border-gray-600 rounded-xl border-dotted mt-5">
        <VideoOffIcon size={40} color="gray" />
        <h2 className="text-gray-400">No Video Selected</h2>
        <h3 className="text-gray-600 text-sm">
          Select a category above to get started
        </h3>
      </div>
    </div>
  );
}

export default SelectContent;

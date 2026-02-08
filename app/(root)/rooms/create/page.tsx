import CreateRoomHeading from "@/components/shared/Room/CreateRoomHeading";
import SelectContent from "@/components/shared/Room/SelectContent";

function page() {
  return (
    <div className="flex justify-center h-full items-center">
      <div className="w-full md:w-[80%] h-full    mt-10 md:rounded-xl">
        <CreateRoomHeading />
        <SelectContent />
      </div>
    </div>
  );
}

export default page;

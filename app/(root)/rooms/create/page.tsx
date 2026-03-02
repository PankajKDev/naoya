import CreateRoomHeading from "@/components/shared/Room/CreateRoomHeading";
import PrivacySettings from "@/components/shared/Room/PrivacySettings";
import RoomButton from "@/components/shared/Room/RoomButton";
import RoomDetails from "@/components/shared/Room/RoomDetails";
import Section from "@/components/shared/Room/Section";
import SelectContent from "@/components/shared/Room/SelectContent";

function page() {
  return (
    <div className="flex justify-center h-full items-center">
      <div className="w-full md:w-[80%] h-full    mt-10 md:rounded-xl">
        <CreateRoomHeading />
        <Section
          childNumber={1}
          sectionTitle="Select Content"
          SectionChild={<SelectContent />}
        />
        <Section
          childNumber={2}
          sectionTitle="Room Details"
          SectionChild={<RoomDetails />}
        />
        <Section
          childNumber={3}
          sectionTitle="Privacy Settings"
          SectionChild={<PrivacySettings />}
        />
        <RoomButton />
      </div>
    </div>
  );
}

export default page;

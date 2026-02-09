import CreateRoomHeading from "@/components/shared/Room/CreateRoomHeading";
import PrivacySettings from "@/components/shared/Room/PrivacySettings";
import RoomDetails from "@/components/shared/Room/RoomDetails";
import Section from "@/components/shared/Room/Section";
import SelectContent from "@/components/shared/Room/SelectContent";
import { Rocket } from "lucide-react";

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
        <div className="w-full flex justify-center">
          <button className="w-[80%] mt-10 bg-primary hover:bg-primary/90 text-white font-black text-xl py-6 rounded-xl shadow-xl shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4">
            Launch Room Now
            <span className="text-white text-3xl">
              <Rocket />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;

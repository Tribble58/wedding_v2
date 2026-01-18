import TitleScreen from "@/components/TitleScreen";
import InvitationScreen from "@/components/InvitationScreen";
import ScheduleScreen from "@/components/ScheduleScreen";
import LocationScreen from "@/components/LocationScreen";
import DressCodeScreen from "@/components/DressCodeScreen";
import GiftsScreen from "@/components/GiftsScreen";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-cream">
      <TitleScreen />
      <InvitationScreen />
      <ScheduleScreen />
      <LocationScreen />
      <DressCodeScreen />
      <GiftsScreen />
    </main>
  );
}
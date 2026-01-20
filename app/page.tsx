import TitleScreen from "@/components/TitleScreen";
import InvitationScreen from "@/components/InvitationScreen";
import DateScreen from "@/components/DateScreen"; // ✅ Новый импорт
import ScheduleScreen from "@/components/ScheduleScreen";
import LocationScreen from "@/components/LocationScreen";
import DressCodeScreen from "@/components/DressCodeScreen";
import GiftsScreen from "@/components/GiftsScreen";

export default function Home() {
  return (
    <main className="w-full bg-cream">
      <TitleScreen />
      <InvitationScreen />
      <DateScreen />
      <ScheduleScreen />
      <LocationScreen />
      <DressCodeScreen />
      <GiftsScreen />
    </main>
  );
}
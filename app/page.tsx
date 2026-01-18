"use client";

import { useState } from "react";
import TitleScreen from "@/components/TitleScreen";
import InvitationScreen from "@/components/InvitationScreen";
import ScheduleScreen from "@/components/ScheduleScreen";
import LocationScreen from "@/components/LocationScreen";
import DressCodeScreen from "@/components/DressCodeScreen";
import GiftsScreen from "@/components/GiftsScreen";
import FloatingEmojis from "@/components/FloatingEmojis";

export default function Home() {
  const [showEmojis, setShowEmojis] = useState(true);

  return (
    <main className="w-full min-h-screen bg-cream relative">
      {showEmojis && <FloatingEmojis count={14} />}
      <TitleScreen />
      <InvitationScreen />
      <ScheduleScreen />
      <LocationScreen />
      <DressCodeScreen />
      <GiftsScreen />
    </main>
  );
}
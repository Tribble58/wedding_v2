import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const DateScreen: React.FC = () => {
  return (
    <section className="relative min-h-fit py-10 px-6 flex flex-col items-center justify-center bg-creamAlt overflow-hidden">
      <FloatingEmojis />

      {/* Заголовок */}
      <h2 className="font-wedding text-h2 text-forest text-center mb-10 z-10 relative">
        Дата
      </h2>

      {/* Рамка с календарем */}
<div className="relative w-full max-w-sm z-10">
  <div className="relative w-full aspect-[1179/1128] border-4 border-creamAlt rounded-[15px] overflow-hidden shadow-2xl bg-creamAlt">
    <Image
      src="/images/calendar.jpg"
      alt="Календарь"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>
    </section>
  );
};

export default DateScreen;
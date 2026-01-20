import React from "react";
import FloatingEmojis from "./FloatingEmojis";

const scheduleItems = [
  { time: "15:20", event: "Роспись в ЗАГСе" },
  { time: "16:30", event: "Сбор гостей в ресторане (welcome-зона)" },
  { time: "17:00", event: "Начало банкета в ресторане" },
  { time: "22:00", event: "Окончание банкета" },
];

const ScheduleScreen: React.FC = () => {
  return (
    <section className="relative min-h-fit py-10 px-6 bg-creamAlt overflow-hidden">
      <FloatingEmojis />

      <h2 className="font-wedding text-h2 text-forest text-center mb-10 z-10 relative">
        Расписание
      </h2>

      <div className="max-w-2xl mx-auto space-y-6 z-10 relative">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-6 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md"
          >
            <div className="text-3xl md:text-4xl font-wedding text-pistachio font-bold shrink-0">
              {item.time}
            </div>
            <div className="flex-1 pt-1">
              <p className="text-lg md:text-xl text-graphite leading-snug">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleScreen;

import React from "react";
import FloatingEmojis from "./FloatingEmojis";

const scheduleItems = [
  { time: "15:00", event: "Роспись (ЗАГС)" },
  { time: "16:00", event: "Сбор гостей в ресторане (welcome-зона)" },
  { time: "16:30", event: "Начало банкета (ресторан)" },
  { time: "22:30", event: "Окончание банкета" },
];

const ScheduleScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 w-full max-w-md">
        <h2 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten mb-10">
          День свадьбы
        </h2>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-2xl shadow-md p-4 border-l-4"
              style={{
                borderLeftColor: ["#FFB6C1", "#87CEEB", "#FFB38E", "#90EE90"][index % 4],
              }}
            >
              <span className="text-lg md:text-xl font-bold text-gray-800 mr-3">
                {item.time}
              </span>
              <span className="text-gray-400 text-xl">|</span>
              <span className="text-sm md:text-base text-gray-600 ml-3">
                {item.event}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleScreen;
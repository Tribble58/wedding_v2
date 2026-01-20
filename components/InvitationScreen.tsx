import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const InvitationScreen: React.FC = () => {
  return (
    <section className="relative min-h-fit py-5 px-6 flex flex-col items-center justify-center bg-cream overflow-hidden">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md text-center">
        {/* <h2 className="font-wedding text-h2 text-forest text-center mb-8 z-10">
          Дорогие друзья!
        </h2> */}

        {/* ✅ Фрейм как в ScheduleScreen */}
      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-xl z-10 relative">
        <p className="text-lg md:text-xl text-graphite text-center leading-relaxed">
          Совсем скоро мы станем мужем и женой, приглашаем Вас отпраздновать этот незабываемый день вместе с нами! 
        </p>
        <p className="text-lg md:text-xl text-graphite text-center leading-relaxed">
          🤵🏻💍👰🏽‍♀️
        </p>
        <p></p>
      </div>

        <p className="relative w-72 h-80 border-4 border-gray-200 rounded-[35px] overflow-hidden shadow-lg">
          <Image
            src="/images/together.jpg"
            alt="Фото пары в детстве"
            fill
            className="object-cover"
          />
        </p>
      </div>
    </section>
  );
};

export default InvitationScreen;
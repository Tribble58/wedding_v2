import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const InvitationScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md text-center">
        <h2 className="text-3xl md:text-4xl text-peach font-handwritten">
          Дорогие друзья и близкие!
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Мы скоро станем мужем и женой, приглашаем Вас отпраздновать вместе незабываемый день нашей свадьбы
        </p>

        <div className="relative w-72 h-80 border-4 border-gray-200 rounded-[35px] overflow-hidden shadow-lg">
          <Image
            src="/images/together1.jpg"
            alt="Фото пары в детстве"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InvitationScreen;
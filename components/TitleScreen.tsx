import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const TitleScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-md">
        <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten">
          Приглашаем вас на нашу свадьбу
        </h1>
        
        <p className="text-2xl md:text-3xl text-center text-gray-800 font-bold">
          5 апреля 2026 года
        </p>

        <div className="relative w-72 h-80 border-4 border-gray-200 rounded-[40px] overflow-hidden shadow-lg bg-white">
          <Image
            src="/images/bride-and-groom-childhood.jpg"
            alt="Детские фото жениха и невесты"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-white px-6 py-3 rounded-3xl shadow-md">
          <p className="text-xl md:text-2xl text-softPink font-bold text-center">
            Дана + Владлен = ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default TitleScreen;
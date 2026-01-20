import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const TitleScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-4 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-md">
        <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten">
          Приглашаем вас на нашу свадьбу
        </h1>
        
        <p className="text-2xl md:text-3xl text-center text-gray-800 font-bold">
          5 апреля 2026 года
        </p>

        {/* ✅ Рамка под 1156:631 ≈ 1.83:1 */}
        <div 
          className="relative w-96 h-52 border-4 border-gray-200 rounded-[40px] overflow-hidden shadow-xl bg-white" 
          style={{ aspectRatio: '1156 / 631' }}
        >
          <Image
            src="/images/bride-and-groom-childhood.jpg"
            alt="Детские фото жениха и невесты"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 96vw, 96vw"
          />
        </div>

        <div className="bg-white px-6 py-3 rounded-3xl shadow-md">
          <p className="text-xl md:text-2xl text-softPink font-bold text-center">
            Владлен + Дана = ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default TitleScreen;
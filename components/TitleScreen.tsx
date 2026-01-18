import React from "react";
import Image from "next/image";

const TitleScreen: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 bg-cream z-20 relative">
      <div className="flex flex-col items-center space-y-4 max-w-md w-full h-full flex-col justify-center">
        <h1 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten">
          Приглашаем вас на нашу свадьбу
        </h1>
        
        <p className="text-2xl md:text-3xl text-center text-gray-800 font-bold">
          5 апреля 2026 года
        </p>

        <div className="flex-1 flex flex-col items-center justify-center space-y-2">
          <div className="flex justify-around mb-2 text-sm text-gray-600 font-handwritten w-72">
            <span>жених</span>
            <span>невеста</span>
          </div>
          
          <div className="relative w-72 h-72 border-4 border-gray-200 rounded-[40px] overflow-hidden shadow-lg bg-white">
            <Image
              src="/images/bride-and-groom-childhood.jpg"
              alt="Детские фото жениха и невесты"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-white px-6 py-3 rounded-3xl shadow-md mt-4">
            <p className="text-xl md:text-2xl text-softPink font-bold text-center">
              Дана + Владлен = ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
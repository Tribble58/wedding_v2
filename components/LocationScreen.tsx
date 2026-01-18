import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const LocationScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-4 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 w-full max-w-md">
        <h2 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten mb-8">
          Место
        </h2>

        <div className="bg-gradient-to-br from-softPink to-peach rounded-3xl shadow-xl p-6 space-y-6">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden border-2 border-white">
            <Image
              src="/images/zags.jpg"
              alt="ЗАГС №2"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-white space-y-2">
            <p className="text-xs uppercase tracking-wider">Адрес:</p>
            <p className="text-lg font-bold">Фурштатская ул., 52</p>
            <p className="text-sm">Дворец бракосочетания № 2</p>
          </div>

          <a
            href="https://yandex.ru/maps/?ll=30.366889,59.945278&z=16&text=Фурштатская+ул.,+52"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-peach text-center font-bold py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            Посмотреть на карте 👆
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationScreen;
import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const colors = [
  { name: "Графит", hex: "#332E2A" },
  { name: "Дождливый лес", hex: "#384637" },
  { name: "Фисташка", hex: "#8B907C" },
  { name: "Светло-серый", hex: "#D0CCCC" },
];

const DressCodeScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 w-full max-w-md space-y-8">
        <h2 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten">
          Дресс-код
        </h2>

        <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
          Мы бы хотели попросить отдать предпочтение оттенкам с картинок ниже и фасонам, в которых Вы будете чувствовать себя комфортно
        </p>

        <div>
          <h3 className="text-xl text-center text-gray-700 font-handwritten mb-4">
            Оттенки:
          </h3>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {colors.map((color, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div
                  className="w-20 h-20 rounded-full border-2 border-gray-300 shadow-md"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-gray-600 text-center">{color.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-center text-gray-700 font-handwritten mb-4">
            Фасоны:
          </h3>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg bg-white">
            <Image
              src="/images/dress-styles.jpg"
              alt="Примеры фасонов платьев"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeScreen;

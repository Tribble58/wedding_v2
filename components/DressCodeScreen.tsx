"use client";

import React, { useState } from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const colors = [
  { name: "Графит", hex: "#332E2A" },      // Черный
  { name: "Дождливый лес", hex: "#384637" }, // Оливковый
];

const DressCodeScreen: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-cream">
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
            <div className="flex justify-between space-x-8">
              {colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div
                    className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"
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
            {/* Соотношение 960:868 ≈ 1.106 */}
            <div 
              className="relative w-full rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg bg-white cursor-pointer hover:scale-[1.02] transition-transform mx-auto"
              style={{ aspectRatio: '960 / 868' }}
              onClick={() => setIsImageOpen(true)}
            >
              <Image
                src="/images/dress-styles.jpg"
                alt="Примеры фасонов платьев"
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">Нажмите для увеличения</p>
          </div>
        </div>
      </section>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative w-full h-full max-w-md">
            <Image
              src="/images/dress-styles.jpg"
              alt="Примеры фасонов платьев"
              fill
              className="object-contain p-4"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-110 transition-transform"
            onClick={() => setIsImageOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default DressCodeScreen;
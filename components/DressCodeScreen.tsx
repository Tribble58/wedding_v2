"use client";

import React, { useState } from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const colors = [
  { name: "Графит", hex: "#332E2A" }, // Черный
  { name: "Дождливый лес", hex: "#384637" }, // Оливковый
];

const DressCodeScreen: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-fit py-10 px-6 bg-creamAlt overflow-hidden">
        <FloatingEmojis />

        <h2 className="font-wedding text-h2 text-forest text-center mb-8 z-10 relative">
          Дресс-код
        </h2>

        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-xl z-10 relative mb-12">
        <p className="text-lg md:text-xl text-graphite text-center leading-relaxed">
           Мы бы хотели попросить отдать предпочтение оттенкам с картинок ниже и фасонам, в которых Вы будете чувствовать себя комфортно
        </p>
      </div>

        {/* <p className="text-lg md:text-xl text-graphite text-center max-w-3xl mx-auto mb-10 leading-relaxed z-10 relative"> */}
         {/*  */}
        {/* </p> */}

        <div className="max-w-4xl mx-auto z-10 relative">
          <div className="relative w-full max-w-xl mx-auto aspect-[960/868] mb-4">
            {/* Соотношение 960:868 ≈ 1.106 */}
            <Image
              src="/images/dress-styles.jpg"
              alt="Основные цвета и образы, на которые можно ориентироваться:"
              fill
              className="object-contain rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setIsImageOpen(true)}
            />
          </div>
          <p className="text-center text-sm text-gray-500 italic">
            Нажмите для увеличения
          </p>
        </div>
      </section>

      {isImageOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-[960/868]">
            <Image
              src="/images/dress-styles.jpg"
              alt="На что ориентироваться"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DressCodeScreen;

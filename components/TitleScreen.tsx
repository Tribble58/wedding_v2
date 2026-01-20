import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const TitleScreen: React.FC = () => {
  return (
    <section className="relative min-h-fit pt-12 pb-4 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-cream via-creamAlt to-cream overflow-hidden">
      <FloatingEmojis />

      <h1 className="font-wedding text-h1 text-forest text-center mb-6 z-10">
        Приглашаем Вас на нашу свадьбу!
      </h1>
      <p className="text-2xl md:text-3xl text-graphite text-center mb-12 z-10 font-semibold">
        5 апреля 2026 года
      </p>

      <div className="relative w-full max-w-2xl aspect-[1.83/1] mb-10 z-10">
        {/* ✅ Рамка под 1156:631 ≈ 1.83:1 */}
        <Image
          src="/images/bride-and-groom-childhood.jpg"
          alt="Владлен и Дана"
          fill
          className="object-cover rounded-2xl shadow-2xl border-4 border-white"
          priority
        />
      </div>

      <p className="text-3xl md:text-4xl font-wedding text-forest text-center z-10">
        Владлен + Дана = ❤️
      </p>
    </section>
  );
};

export default TitleScreen;
import React from "react";
import FloatingEmojis from "./FloatingEmojis";

const GOOGLE_FORM_URL = "https://forms.gle/orrxTRJbD8yy6gqs9";

const GiftsScreen: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 w-full max-w-md space-y-6">
        <h2 className="text-3xl md:text-4xl text-center text-softPink font-handwritten">
          Подарки
        </h2>

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-lg p-6 space-y-3 border-2 border-purple-200">
          <h3 className="text-lg md:text-xl font-bold text-purple-800 flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            Не беспокойтесь с выбором подарков!
          </h3>
          <p className="text-sm md:text-base text-purple-700">
            Принимаем любые денежные знаки
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange to-peach rounded-3xl shadow-lg p-6 space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            🌸 Цветы
          </h3>
          <p className="text-sm md:text-base text-white leading-relaxed">
            Просим не отягощать себя выбором букетов, декор и украшения уже будут содержать много цветов, которые будут украшать зал и невесту
          </p>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-sm md:text-base text-gray-600">
            Нажмите кнопку внизу для подтверждения участия
          </p>
          
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xs mx-auto bg-gradient-to-r from-softPink to-peach text-white font-bold text-base md:text-lg py-4 px-8 rounded-3xl shadow-lg hover:scale-105 transition-transform"
          >
            Подтвердить участие
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default GiftsScreen;
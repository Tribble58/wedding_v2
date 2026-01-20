import React from "react";
import FloatingEmojis from "./FloatingEmojis";

const GOOGLE_FORM_URL = "https://forms.gle/orrxTRJbD8yy6gqs9";

const GiftsScreen: React.FC = () => {
  return (
    <section className="relative min-h-fit py-10 px-6 bg-cream overflow-hidden">
      <FloatingEmojis />

      <h2 className="font-wedding text-h2 text-forest text-center mb-8 z-10 relative">
        Подарки
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 z-10 relative">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <p className="text-4xl text-center mb-4">💝</p>
          <h3 className="font-wedding text-2xl md:text-3xl text-forest text-center mb-4">
            Не беспокойтесь с выбором подарков!
          </h3>
          <p className="text-lg md:text-xl text-graphite text-center leading-relaxed">
            Принимаем любые денежные знаки
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <p className="text-4xl text-center mb-4">🌸</p>
          <h3 className="font-wedding text-2xl md:text-3xl text-forest text-center mb-4">
            Цветы
          </h3>
          <p className="text-lg md:text-xl text-graphite text-center leading-relaxed">
            Декор и украшения уже будут в зале, поэтому приятным комплиментом для нас вместо цветов будет бутылочка игристого вина, которую мы откроем на ближайшем совместном празднике :)
          </p>
          <p className="text-lg md:text-xl text-graphite text-center leading-relaxed">
            В случае возникновения вопросов обращайтесь к нам❤️
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-base md:text-lg text-graphite mb-6">
            Нажмите кнопку внизу для подтверждения участия
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-forest hover:bg-pistachio text-white text-lg md:text-xl font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Подтвердить участие
          </a>
        </div>
      </div>
    </section>
  );
};

export default GiftsScreen;

import React from "react";
import FloatingEmojis from "./FloatingEmojis";
import Image from "next/image";

const locations = [
  {
    title: "ЗАГС №2",
    image: "/images/zags.jpg",
    address: "Фурштатская ул., 52",
    subtitle: "Дворец бракосочетания № 2",
    mapUrl: "https://yandex.ru/maps/?ll=30.366889,59.945278&z=16&text=Фурштатская+ул.,+52"
  },
  {
    title: "Дом Бутик Отель",
    image: "/images/restaurant.jpg",
    address: "Гангутская ул., 4",
    subtitle: "Ресторан",
    mapUrl: "https://yandex.ru/maps/org/dom_butik_otel/1705154985/?ll=30.360358%2C59.944803&z=15.94"
  }
];

const LocationScreen: React.FC = () => {
  return (
    <section className="relative min-h-fit py-10 px-6 bg-cream overflow-hidden">
      <FloatingEmojis />

      <h2 className="font-wedding text-h2 text-forest text-center mb-10 z-10 relative">
        Места
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 z-10 relative">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={location.image}
                alt={location.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="font-wedding text-2xl md:text-3xl text-forest text-center">
                {location.title}
              </h3>
              <div className="text-center space-y-1">
                <p className="text-sm text-pistachio font-semibold uppercase tracking-wide">
                  Адрес:
                </p>
                <p className="text-base md:text-lg text-graphite font-medium">
                  {location.address}
                </p>
                <p className="text-sm text-gray-600">{location.subtitle}</p>
              </div>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 py-3 bg-pistachio hover:bg-forest text-white text-center rounded-lg transition-colors duration-300"
              >
                Посмотреть на карте 👆
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationScreen;

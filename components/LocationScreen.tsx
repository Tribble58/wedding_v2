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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-8 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 w-full max-w-md space-y-8">
        <h2 className="text-3xl md:text-4xl text-center text-gray-700 font-handwritten">
          Места
        </h2>

        {locations.map((location, index) => (
          <div key={index} className="bg-gradient-to-br from-softPink to-peach rounded-3xl shadow-xl p-6 space-y-6">
            <div className="relative w-full h-48 rounded-2xl overflow-hidden border-2 border-white">
              <Image
                src={location.image}
                alt={location.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-white space-y-2">
              <p className="text-xs uppercase tracking-wider">Адрес:</p>
              <p className="text-lg font-bold">{location.address}</p>
              <p className="text-sm">{location.subtitle}</p>
            </div>

            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-peach text-center font-bold py-3 px-6 rounded-2xl shadow-md hover:scale-105 transition-transform"
            >
              Посмотреть на карте 👆
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationScreen;
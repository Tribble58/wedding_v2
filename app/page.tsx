"use client";

import { useState, useRef, useEffect } from "react";
import TitleScreen from "@/components/TitleScreen";
import InvitationScreen from "@/components/InvitationScreen";
import ScheduleScreen from "@/components/ScheduleScreen";
import LocationScreen from "@/components/LocationScreen";
import DressCodeScreen from "@/components/DressCodeScreen";
import GiftsScreen from "@/components/GiftsScreen";
import FloatingEmojis from "@/components/FloatingEmojis";

const slides = [
  <TitleScreen key="title" />,
  <InvitationScreen key="invitation" />,
  <ScheduleScreen key="schedule" />,
  <LocationScreen key="location" />,
  <DressCodeScreen key="dresscode" />,
  <GiftsScreen key="gifts" />,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Обработка свайпов на мобильных
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchStartX = e.touches[0].clientX;
      const touchStartY = e.touches[0].clientY;
      
      const handleTouchMove = (e: TouchEvent) => {
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        const deltaX = touchStartX - touchEndX;
        const deltaY = touchStartY - touchEndY;
        
        // Горизонтальный свайп
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
          if (deltaX > 0 && currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          } else if (deltaX < 0 && currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
        }
      };

      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", () => {
        document.removeEventListener("touchmove", handleTouchMove);
      });
    };

    document.addEventListener("touchstart", handleTouchStart);
    return () => document.removeEventListener("touchstart", handleTouchStart);
  }, [currentSlide]);

  // Клавиатурная навигация
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <main className="w-full h-screen bg-cream overflow-hidden relative">
      <FloatingEmojis />
      
      <div 
        ref={containerRef}
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-softPink w-8 scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Навигационные кнопки */}
      {currentSlide > 0 && (
        <button
          onClick={() => setCurrentSlide(currentSlide - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-30"
        >
          ‹
        </button>
      )}
      
      {currentSlide < slides.length - 1 && (
        <button
          onClick={() => setCurrentSlide(currentSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-30"
        >
          ›
        </button>
      )}
    </main>
  );
}
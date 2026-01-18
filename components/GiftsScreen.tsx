"use client";

import React, { useState } from "react";
import FloatingEmojis from "./FloatingEmojis";

const GiftsScreen: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmed: true, timestamp: new Date().toISOString() }),
      });

      if (response.ok) {
        setMessage("✅ Ваше участие подтверждено! Спасибо!");
      } else {
        setMessage("❌ Произошла ошибка. Попробуйте еще раз.");
      }
    } catch (error) {
      setMessage("❌ Произошла ошибка. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-cream">
      <FloatingEmojis count={7} />
      
      <div className="relative z-10 w-full max-w-md space-y-6">
        <h2 className="text-3xl md:text-4xl text-center text-softPink font-handwritten">
          Подарки
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-6 space-y-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">
            Не беспокойтесь с выбором подарков!
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            Принимаем любые денежные знаки
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange to-peach rounded-3xl shadow-lg p-6 space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
            🌸 Цветы
          </h3>
          <p className="text-sm md:text-base text-white leading-relaxed">
            Просим не отягощать себя выбором букетов, декор и украшения уже будут содержать много цветов, которые будут украшать зал и невесту
          </p>
        </div>

        <div className="pt-6 space-y-4 text-center">
          <p className="text-sm md:text-base text-gray-600">
            Нажмите кнопку внизу для подтверждения участия
          </p>
          
          <button
            onClick={handleConfirm}
            disabled={isSubmitting}
            className="w-full max-w-xs mx-auto block bg-gradient-to-r from-softPink to-peach text-white font-bold text-base md:text-lg py-4 px-8 rounded-3xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Отправка..." : "Подтвердить участие"}
          </button>

          {message && (
            <p className={`text-sm font-bold ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GiftsScreen;
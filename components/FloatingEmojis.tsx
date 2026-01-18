"use client";

import React, { useEffect, useRef } from "react";

interface FloatingEmojisProps {
  emojis?: string[];
  count?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({
  emojis = ["💕", "❤️", "💍", "🤵", "👰", "🕊️"],
  count = 7,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const emojisList: HTMLElement[] = [];

    // Создаем эмодзи с уникальными траекториями
    for (let i = 0; i < count; i++) {
      const emoji = document.createElement("div");
      emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.className = "emoji-item absolute text-2xl md:text-3xl opacity-70 z-10";
      
      // Рандомная стартовая точка по краям экрана
      const startSide = Math.floor(Math.random() * 4);
      let startX, startY;
      
      switch(startSide) {
        case 0: // top
          startX = Math.random() * 100;
          startY = -10;
          break;
        case 1: // right
          startX = 110;
          startY = Math.random() * 100;
          break;
        case 2: // bottom
          startX = Math.random() * 100;
          startY = 110;
          break;
        default: // left
          startX = -10;
          startY = Math.random() * 100;
          break;
      }

      emoji.style.left = `${startX}%`;
      emoji.style.top = `${startY}%`;

      // Уникальная задержка для каждого эмодзи
      emoji.style.animationDelay = `${Math.random() * 3}s`;
      
      container.appendChild(emoji);
      emojisList.push(emoji as HTMLElement);
    }

    // Добавляем CSS анимацию
    const style = document.createElement("style");
    style.textContent = `
      @keyframes emojiPath {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(20px, -30px) rotate(90deg); }
        50% { transform: translate(-20px, 0) rotate(180deg); }
        75% { transform: translate(20px, 30px) rotate(270deg); }
        100% { transform: translate(0, 0) rotate(360deg); }
      }
      
      .emoji-item {
        animation: emojiPath 8s ease-in-out infinite;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      emojisList.forEach(emoji => emoji.remove());
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [count, emojis]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default FloatingEmojis;
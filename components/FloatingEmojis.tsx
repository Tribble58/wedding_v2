"use client";

import React from "react";

interface FloatingEmojisProps {
  emojis?: string[];
  count?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({
  emojis = ["💕", "❤️", "💍", "🤵", "👰", "🕊️"],
  count = 7,
}) => {
  const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
  const getRandomAnimation = () => {
    const animations = ["animate-float", "animate-drift", "animate-rotate"];
    return animations[Math.floor(Math.random() * animations.length)];
  };
  const getRandomDelay = () => Math.random() * 3;
  
  // Позиции только по краям экрана, чтобы не наезжать на контент
  const getRandomPosition = () => {
    const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    
    switch(side) {
      case 0: // top
        return {
          top: `${Math.random() * 15}%`,
          left: `${Math.random() * 100}%`,
        };
      case 1: // right
        return {
          top: `${Math.random() * 100}%`,
          right: `${Math.random() * 10}%`,
          left: 'auto',
        };
      case 2: // bottom
        return {
          bottom: `${Math.random() * 15}%`,
          left: `${Math.random() * 100}%`,
          top: 'auto',
        };
      default: // left
        return {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 10}%`,
        };
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`absolute text-2xl md:text-3xl opacity-70 ${getRandomAnimation()}`}
          style={{
            ...getRandomPosition(),
            animationDelay: `${getRandomDelay()}s`,
          }}
        >
          {getRandomEmoji()}
        </div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
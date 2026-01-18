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
  const getRandomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`absolute text-2xl md:text-3xl opacity-75 ${getRandomAnimation()}`}
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
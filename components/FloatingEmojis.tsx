"use client";

import React from "react";

interface FloatingEmojisProps {
  count?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({ count = 14 }) => {
  const emojis = ["💕", "❤️", "💍", "🤵", "👰", "🕊️"];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const delay = (i * 0.3) % 3;
        const side = i % 4;
        
        let positionClass = "";
        switch(side) {
          case 0: positionClass = "top-4 left-4"; break;
          case 1: positionClass = "top-4 right-4"; break;
          case 2: positionClass = "bottom-4 left-4"; break;
          case 3: positionClass = "bottom-4 right-4"; break;
        }

        return (
          <div
            key={i}
            className={`absolute text-2xl md:text-3xl opacity-70 animate-emojiPath ${positionClass}`}
            style={{ animationDelay: `${delay}s` }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingEmojis;
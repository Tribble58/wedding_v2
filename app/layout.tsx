// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Caveat, Cormorant_Garamond } from "next/font/google";

const weddingScript = Caveat({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-wedding",
  display: "swap",
});

const weddingBody = Cormorant_Garamond({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Дана и Владлен - Приглашение на свадьбу",
  description: "Приглашаем вас на нашу свадьбу 5 апреля 2026 года",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${weddingScript.variable} ${weddingBody.variable}`}>
      <body>{children}</body>
    </html>
  );
}

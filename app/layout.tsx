// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Lobster, Cormorant_Garamond } from "next/font/google";

const weddingScript = Lobster({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
  variable: "--font-wedding",
  display: "swap",
});

const weddingBody = Cormorant_Garamond({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["italic"],
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
    <html
      lang="ru"
      className={`${weddingBody.variable} ${weddingScript.variable}`}
    >
      <body className="min-h-screen bg-cream text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
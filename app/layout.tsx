import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ru">
      <head>
        {/* Preload шрифтов */}
        <link rel="preload" href="/fonts/PinkMouseScriptRUS-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-pms">{children}</body>
    </html>
  );
}
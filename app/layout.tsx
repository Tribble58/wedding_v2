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
        <link rel="preload" href="/fonts/PinkMouseScriptRUS-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-pms">{children}</body>
    </html>
  );
}
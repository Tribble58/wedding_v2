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
      <body className="antialiased">{children}</body>
    </html>
  );
}
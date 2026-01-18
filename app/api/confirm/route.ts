import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { confirmed, timestamp } = body;

    // Настройка транспорта для отправки email
    const transporter = nodemailer.createTransport({
      service: "gmail", // или другой SMTP сервис
      auth: {
        user: process.env.EMAIL_USER, // ваш email
        pass: process.env.EMAIL_PASS, // пароль приложения
      },
    });

    // Отправка email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL, // email для уведомлений
      subject: "Новое подтверждение участия на свадьбе",
      html: `
        <h2>Новое подтверждение участия</h2>
        <p><strong>Статус:</strong> ${confirmed ? "Подтверждено" : "Не подтверждено"}</p>
        <p><strong>Время:</strong> ${timestamp}</p>
        <p><strong>IP адрес:</strong> ${request.headers.get("x-forwarded-for") || "неизвестен"}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Подтверждение получено" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка при обработке подтверждения:", error);
    return NextResponse.json(
      { success: false, message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
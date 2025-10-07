"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendEmail({
  name,
  email,
  html,
}: {
  name: string;
  email: string;
  html: string;
}) {
  try {
    // Validate environment variables
    if (!process.env.GMAIL_USERNAME || !process.env.GMAIL_PASSWORD) {
      throw new Error("Email configuration is missing");
    }

    await transporter.sendMail({
      from: `"Spectrum Legal Solutions" <${process.env.GMAIL_USERNAME}>`,
      to: "piyaporn.t@spectrumlegal.co",
      subject: `New Contact Form Submission from ${name}`,
      html: html,
      cc: email,
      replyTo: email,
      headers: {
        "X-Mailer": "Spectrum Legal Solutions",
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        Importance: "Normal",
        "Content-Type": "text/html; charset=UTF-8",
      },
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send email.",
    };
  }
}

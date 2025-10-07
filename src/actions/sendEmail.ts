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
    await transporter.sendMail({
      from: `"Spectrum Legal Solutions" ${process.env.GMAIL_USERNAME}`,
      to: [
        "piyaporn.t@spectrumlegal.co",
        {
          name: "Spectrum Legal Solutions",
          address: "piyaporn.t@spectrumlegal.co",
        },
      ],
      subject: `New message from ${name}`,
      html: html,
      cc: email,
    });

    // await transporter.sendMail({
    //   from: process.env.GMAIL_USERNAME,
    //   to: "info@spectrumlegal.co", // Replace with your desired recipient
    //   subject: `New message from ${name}`,
    //   html: html,
    //   replyTo: email,
    // });
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email." };
  }
}

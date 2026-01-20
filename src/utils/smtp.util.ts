import nodemailer from 'nodemailer';
import { getEnv } from '../config/env.config';

interface SendEmailOptions {
  to: string;
  subject?: string;
  text?: string;
  html?: string;
}

const sendEmail = async ({ to, subject, text, html }: SendEmailOptions) => {

  if (!to || typeof to !== "string" || !to.includes("@")) {
    console.error("❌ Invalid or missing recipient email:", to);
    return { success: false, error: "No valid recipient email provided" };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: getEnv.SMTP_HOST,
    port: getEnv.SMTP_PORT,
    auth: {
      user: getEnv.SMTP_USER,
      pass: getEnv.SMTP_PASS,
    },
  });

  const mailOptions = {
    from:`VIBEHRMS ${getEnv.SMTP_FROM}`,
    to,
    subject: subject || "No Subject",
    text: text || "",
    html: html || "",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ Error sending email:', error);
      return { success: false, error: error.message };
    }
    console.error('❌ Unknown error sending email:', error);
    return { success: false, error: String(error) };
  }
};

export { sendEmail };

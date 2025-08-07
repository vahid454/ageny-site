import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get('name')?.toString() || '';
  const email = data.get('email')?.toString() || '';
  const phone = data.get('phone')?.toString() || '';
  const message = data.get('message')?.toString() || '';

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'vahidmansuri702@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nQuery:\n${message}`,
    });

    return NextResponse.redirect(new URL('/contact?sent=1', req.url));
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

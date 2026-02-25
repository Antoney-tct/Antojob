import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';

// IMPORTANT: Set these environment variables in your Vercel project settings.
const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL || 'aouko178@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid form data.', errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Note: Must be from a verified domain on Resend for production
      to: [myEmail],
      reply_to: email,
      subject: `New Portfolio Message: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ message: 'Error sending email.', error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}
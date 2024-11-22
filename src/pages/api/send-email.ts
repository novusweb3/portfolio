import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend('re_U2QF5AT6_FXJ3VqwfDrGCpWzd581x5k9P');

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, message } = await request.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact@ithd.co.uk',
      subject: `New Contact Form: ${subject || 'Website Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { 
      status: 500 
    });
  }
}; 
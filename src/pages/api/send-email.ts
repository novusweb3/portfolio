import type { APIRoute } from 'astro';
import emailjs from '@emailjs/browser';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    await emailjs.send(
      import.meta.env.EMAILJS_SERVICE_ID,
      import.meta.env.EMAILJS_TEMPLATE_ID,
      data,
      import.meta.env.EMAILJS_PUBLIC_KEY
    );

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500
    });
  }
}; 
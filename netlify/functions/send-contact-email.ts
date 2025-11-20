import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Solo permitir POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse del body
    const data: ContactFormData = JSON.parse(event.body || '{}');

    // Validación básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Todos los campos son requeridos',
          missing: {
            name: !data.name,
            email: !data.email,
            subject: !data.subject,
            message: !data.message,
          }
        }),
      };
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email inválido' }),
      };
    }

    // IMPORTANTE: Aquí puedes integrar con servicios de email como:
    // - SendGrid (https://sendgrid.com/)
    // - Mailgun (https://www.mailgun.com/)
    // - Resend (https://resend.com/)
    // - O usar Netlify Forms directamente

    // Por ahora, vamos a usar Netlify Forms como backend
    // Esto es más simple y no requiere configuración adicional

    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Para producción, aquí enviarías el email usando un servicio
    // Ejemplo con SendGrid (requiere API key en variables de entorno):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'Lilysgrooming@gmail.com',
      from: 'noreply@tudominio.com', // Debe ser verificado en SendGrid
      subject: `Contacto Web: ${data.subject}`,
      text: `
        Nombre: ${data.name}
        Email: ${data.email}
        Asunto: ${data.subject}

        Mensaje:
        ${data.message}
      `,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Asunto:</strong> ${data.subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
    };

    await sgMail.send(msg);
    */

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Mensaje recibido correctamente. Te contactaremos pronto.',
        data: {
          name: data.name,
          email: data.email,
        }
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error al procesar tu mensaje. Por favor, intenta de nuevo.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};

export { handler };

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  const { name, email, message } = await req.json()

  try {
    const emailData = await resend.emails.send({
        from: 'Contact <contact@resend.dev>',
        to: 'jeanneaurelle100@gmail.com', 
        subject: `Nouveau message de ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f4f7fc; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #4C51BF; font-size: 24px;">Nouveau message de ${name}</h2>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <p style="font-size: 16px; color: #333;">Vous avez reçu un nouveau message via le formulaire de contact.</p>
              <table style="width: 100%; margin-top: 20px; font-size: 16px; color: #333;">
                <tr>
                  <td style="padding: 8px; font-weight: bold; width: 30%;">Nom:</td>
                  <td style="padding: 8px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Email:</td>
                  <td style="padding: 8px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Message:</td>
                  <td style="padding: 8px;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="margin-top: 20px; text-align: center; font-size: 14px; color: #999;">
              <p>Ce message a été envoyé automatiquement depuis le formulaire de contact de votre site web.</p>
            </div>
          </div>
        `
      })
      

    return new Response(JSON.stringify({ message: 'Message envoyé', id: emailData.id }), {
      status: 200,
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ message: 'Erreur serveur' }), { status: 500 })
  }
}

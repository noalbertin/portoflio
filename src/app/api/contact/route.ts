import { Resend } from 'resend'
import { NextRequest } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// Fonction pour vérifier le token reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY non définie')
    return false
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('Erreur lors de la vérification reCAPTCHA:', error)
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, recaptchaToken } = await req.json()

    // Validation des champs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Tous les champs sont requis' }),
        { status: 400 }
      )
    }

    // Vérification du token reCAPTCHA
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({ message: 'Token reCAPTCHA manquant' }),
        { status: 400 }
      )
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken)
    
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({ message: 'Échec de la vérification reCAPTCHA. Veuillez réessayer.' }),
        { status: 400 }
      )
    }

    // Envoi de l'e-mail via Resend
    const { data, error } = await resend.emails.send({
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
    
    if (error) {
      console.error('Erreur Resend:', error)
      return new Response(
        JSON.stringify({ message: 'Erreur lors de l’envoi de l’e-mail' }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ message: 'Message envoyé avec succès', id: data?.id }),
      { status: 200 }
    )
  } catch (err) {
    console.error('Erreur serveur:', err)
    return new Response(
      JSON.stringify({ message: 'Erreur serveur' }),
      { status: 500 }
    )
  }
}
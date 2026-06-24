import type { CreateOrderData } from './CreateOrderData'

const brevoApiKey = process.env.BREVO_API_KEY ?? ''

if (brevoApiKey.length === 0) {
  console.error('BREVO_API_KEY не указан')
  throw new Error('BREVO_API_KEY не указан')
}

export async function sendEmail(email: string, htmlContent: string) {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify({
      sender: {
        name: 'SNOVA',
        email: 'ishmizh@gmail.com',
      },
      to: [{ email }],
      subject: 'New order on SNOVA',
      htmlContent,
    }),
  })

  const data = await response.json()
  console.log(data)
}

export function createClientEmailBody(orderData: CreateOrderData): string {
  let mail_text = ''

  mail_text += '<h2>Hi!</h2>'
  mail_text += '<p>Thank you for subscribing to the SNOVA eco club — I truly appreciate your interest.</p>'
  mail_text += '<p>I will contact you soon with workshop announcements, cleanups, and useful materials.</p>'
  mail_text += '<p>Warm regards, Dasha.</p>'
  mail_text += '<h3>SNOVA</h3>'

  console.log(mail_text)

  return mail_text
}

export function createAdminEmailBody(orderData: CreateOrderData): string {
  let mail_text = ''

  mail_text += '<h2>Даша, привет!</h2>'
  mail_text += '<p>Новая подписка на эко-клуб с лендинга!</p>'
  mail_text += `<p>Telegram клиента:${orderData.telegram}</p>`
  mail_text += `<p>Email клиента:${orderData.email}</p>`

  console.log(mail_text)

  return mail_text
}

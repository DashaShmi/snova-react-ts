import { parseContact } from '../utils/parseContact'

export interface ClubSubscriptionData {
  email: string
  telegram: string
}

const API_URL =
  import.meta.env.VITE_CLUB_API_URL ?? 'https://functions.yandexcloud.net/d4ei3nb5e0ktq3nqm0vl'

async function sendSubscription(data: ClubSubscriptionData): Promise<boolean> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
      return false
    }

    const text = await response.text()
    if (text) {
      JSON.parse(text)
    }

    return true
  } catch (error) {
    console.error('Error:', error)
    return false
  }
}

export async function subscribeToClub(contact: string): Promise<boolean> {
  return sendSubscription(parseContact(contact))
}

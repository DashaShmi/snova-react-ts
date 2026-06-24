import type { CreateOrderData } from './CreateOrderData'
import { createAdminEmailBody, createClientEmailBody, sendEmail } from './utils'

module.exports.handler = async function (body: { httpMethod?: string }, context: { getPayload: () => CreateOrderData }) {
  const httpMethod = body.httpMethod

  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  }

  console.log('context', context)

  const orderData = context.getPayload()
  const result = { text: 'данные реквеста', payload: orderData }

  const textAdmin = createAdminEmailBody(orderData)
  const textClient = createClientEmailBody(orderData)

  sendEmail(orderData.email, textClient)
  sendEmail('ishmizh@gmail.com', textAdmin)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(result),
  }
}

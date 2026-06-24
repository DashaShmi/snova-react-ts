import { useState } from 'react'
import { subscribeToClub } from '../api/subscribeToClub'

const socialLinks = [
  {
    href: 'https://www.instagram.com/snova.upcycle/',
    label: 'Instagram',
    description: 'Анонсы воркшопов',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.226-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: 'https://t.me/shmizh',
    label: 'Telegram',
    description: 'Быстрые вопросы и запись',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    href: 'https://snova.eco/',
    label: 'Магазин',
    description: (
      <>
        Купить
        <br />
        сумочки
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 22 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
  },
] as const

export function Footer() {
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [formTouched, setFormTouched] = useState(false)
  const [subscriptionIsComplete, setSubscriptionIsComplete] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const checkForm = (): boolean => {
    if (contact.trim() === '') {
      setError('Укажите email или ник в Telegram')
      return false
    }

    setError('')
    return true
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormTouched(true)

    if (!checkForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const isSent = await subscribeToClub(contact)

      if (isSent) {
        setSubscriptionIsComplete(true)
        setContact('')
      } else {
        alert('ошибка')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-social">
        <div className="social-card">
          <h2 className="social-title">Следите за приколами, процессом, приносите пакеты на переработку.</h2>
          <div className="social-icons">
            {socialLinks.map((link) => (
              <div className="social-item" key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
                <p className="social-item-desc">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-club">
        <h2 className="club-title">Вступай в эко клуб</h2>
        <p className="club-text">
          Подпишись, чтобы не пропустить анонсы мастер-классов, уборок мусора, дропы и полезные материалы.
        </p>
        {subscriptionIsComplete ? (
          <p className="club-success">Подписка оформлена! Скоро буду на связи.</p>
        ) : (
          <form className="club-form" onSubmit={submitHandler}>
            <input
              className="club-input"
              type="text"
              placeholder="ваш ник в telegram или email"
              value={contact}
              onChange={(event) => {
                setContact(event.target.value)
                setFormTouched(true)
              }}
            />
            <button className="btn-pill btn-cream" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'отправляем...' : 'подписаться'}
            </button>
            {formTouched && error ? <p className="club-error">{error}</p> : null}
          </form>
        )}
      </div>
    </footer>
  )
}

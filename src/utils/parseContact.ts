const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parseContact(value: string): { email: string; telegram: string } {
  const trimmed = value.trim()

  if (EMAIL_REGEX.test(trimmed)) {
    return { email: trimmed, telegram: '' }
  }

  return { email: '', telegram: trimmed }
}

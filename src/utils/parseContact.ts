export function parseContact(value: string): { email: string; telegram: string } {
  const trimmed = value.trim()

  if (trimmed.includes('@')) {
    return { email: trimmed, telegram: '' }
  }

  return { email: '', telegram: trimmed }
}

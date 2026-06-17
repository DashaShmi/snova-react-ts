interface HeaderProps {
  onPrimaryClick: () => void
}

export function Header({ onPrimaryClick }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="SNOVA home">
        SNOVA
      </a>
      <button className="header-cta" type="button" onClick={onPrimaryClick}>
        <span className="header-cta-line">плавить</span>
        <span className="header-cta-line">пакеты</span>
      </button>
    </header>
  )
}

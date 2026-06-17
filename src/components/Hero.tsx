interface HeroProps {
  onOfflineClick: () => void
  onOnlineClick: () => void
}

export function Hero({ onOfflineClick, onOnlineClick }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-card">
          <div className="hero-top">
            <h1 className="hero-brand-title">SNOVA</h1>
            <p className="hero-intro">
              Я здесь чтобы показать тебе как шить из пакетов. Научимся плавить старые пакеты в прочный материал и
              шить из него: косметички, сумки, кошельки и обложки на паспорт.
            </p>
          </div>

          <div className="hero-mid">
            <div className="hero-photo-zone">
              <div className="hero-photo-wrap">
                <img className="hero-photo" src="/assets/hero-portrait.png" alt="Даша — основательница SNOVA" />
                <span className="hero-hand hero-hand-greeting">Привет, мусорным энтузиастам!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-about-card">
          <p className="hero-about-text">
            Меня зовут Даша, у меня есть свой бренд аксессуаров из переработанного пластика для эко-задротов. Здесь
            можно записаться ко мне на оффлайн мастер класс в Тбилиси или купить уроки онлайн. Погнали!
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn-pill btn-lime" type="button" onClick={onOfflineClick}>
            оффлайн
          </button>
          <button className="btn-pill btn-cream" type="button" onClick={onOnlineClick}>
            онлайн
          </button>
        </div>
      </div>
    </section>
  )
}

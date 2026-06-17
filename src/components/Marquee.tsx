export function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>Шьем из мусора — создаем устойчивую моду вместе! ✦</span>
        ))}
      </div>
    </div>
  )
}

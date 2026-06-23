import { onlineLessons } from '../data/lessons'
import { LessonCard } from './LessonCard'
import flowerBadge from '../assets-internal/flower-badge.png'

export function Services() {
  return (
    <section className="services" id="services">
      <img className="flower-badge" src={flowerBadge} alt="SNOVA — цветок" />
      <div className="services-grid">
        {onlineLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  )
}

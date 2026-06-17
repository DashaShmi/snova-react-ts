import { onlineLessons } from '../data/lessons'
import { LessonCard } from './LessonCard'

export function Services() {
  return (
    <section className="services" id="services">
      <img className="flower-badge" src="/assets/flower-badge.png" alt="SNOVA — цветок" />
      <div className="services-grid">
        {onlineLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  )
}

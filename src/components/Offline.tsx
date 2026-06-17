import { offlineLessons } from '../data/lessons'
import { LessonCard } from './LessonCard'

export function Offline() {
  return (
    <section className="offline" id="offline">
      <div className="offline-header">
        <h2 className="offline-title">
          Оффлайн мастер классы
          <br />в Тбилиси
        </h2>
      </div>
      <div className="offline-grid">
        {offlineLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import type { Lesson } from '../types/content'

interface LessonCardProps {
  lesson: Lesson
}

export function LessonCard({ lesson }: LessonCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="service-card service-card-lesson" id={lesson.id}>
      {lesson.showStars ? (
        <div className="offline-photo-wrap">
          <img className="offline-stars" src="/assets/offline-stars.png" alt="" aria-hidden="true" />
          <img className="lesson-photo" src={lesson.image} alt={lesson.imageAlt} />
        </div>
      ) : (
        <img className="lesson-photo" src={lesson.image} alt={lesson.imageAlt} />
      )}

      <h2 className="service-title lesson-title">{lesson.title}</h2>
      <p className="lesson-body">{lesson.body}</p>
      {lesson.extraBody ? <p className="lesson-body lesson-bonus">{lesson.extraBody}</p> : null}
      {lesson.materials ? <p className="lesson-materials">{lesson.materials}</p> : null}

      <div className="lesson-chips">
        <span className="lesson-chip">{lesson.duration}</span>
        <span className="lesson-chip">{lesson.level}</span>
      </div>

      <div className="lesson-toggle-wrap">
        <button
          className="btn-pill btn-cream lesson-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${lesson.id}-details`}
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? 'скрыть' : 'подробнее'}
        </button>
      </div>

      <div className={`lesson-details ${isOpen ? 'is-open' : ''}`} id={`${lesson.id}-details`} hidden={!isOpen}>
        <div className="lesson-details-inner">
          <p className="lesson-price">{lesson.price}</p>
          <p className="lesson-note">{lesson.note}</p>
          <div className="lesson-actions">
            <a
              className="btn-pill btn-lime"
              href="https://dashashmi.github.io/SNOVA-payment"
              target="_blank"
              rel="noreferrer"
            >
              купить
            </a>
            <a className="btn-pill btn-cream" href={lesson.telegramUrl} target="_blank" rel="noreferrer">
              {lesson.telegramLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

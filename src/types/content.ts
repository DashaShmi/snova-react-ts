export type LessonTag = string

export interface Lesson {
  id: string
  title: string
  body: string
  extraBody?: string
  materials?: string
  duration: string
  level: string
  image: string
  imageAlt: string
  price: string
  note: string
  telegramLabel: string
  telegramUrl: string
  chips?: LessonTag[]
  showStars?: boolean
}

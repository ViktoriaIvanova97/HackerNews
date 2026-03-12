import { declension } from './declension'

export function timeAgo(unixTime) {
  const now = Date.now()
  const time = unixTime * 1000

  const diff = now - time
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  if (hours >= 12) {
    const date = new Date(time)
    const day = date.getDate()
    const month = date.toLocaleString('ru-RU', { month: 'long' })
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
  }

  if (hours > 0) {
    return `${hours} ${declension(hours, ['час', 'часа', 'часов'])} назад`
  }

  if (minutes > 0) {
    return `${minutes} ${declension(minutes, [
      'минута',
      'минуты',
      'минут',
    ])} назад`
  }

  return `${seconds} ${declension(seconds, [
    'секунда',
    'секунды',
    'секунд',
  ])} назад`
}

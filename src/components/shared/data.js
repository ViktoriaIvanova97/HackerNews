export function data(unixTime) {
	const date = new Date(unixTime * 1000)
	const day = date.getDate()
	const month = date.toLocaleString('ru-RU', { month: 'long' })
	const year = date.getFullYear()
  
	return `${day} ${month} ${year}`
  }
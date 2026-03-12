import { useNavigate } from 'react-router-dom'
import { timeAgo } from '../shared/timeAgo'

export function NewsItem({ id, el }) {
  const navigate = useNavigate()
  const openDetails = () => {
    navigate(`/news/${el.id}`)
  }

  return (
    <div className="news-item" key={id} onClick={openDetails}>
      <div className="news-item-title">
        <p>{el.title}</p>
      </div>
      <div className="news-item-info">
        <p> Score : {el.score}</p>
        <p> Author : {el.by}</p>
        <p>{timeAgo(el.time)}</p>
      </div>
    </div>
  )
}

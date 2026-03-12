import { useNavigate, useParams } from 'react-router-dom'
import Button from 'antd/es/button'
import { useSelector } from 'react-redux'
import { selectorNews } from '../../RTK/selectors/selectors'
import { data } from '../shared/data'

function NewsDetails() {
  const navigate = useNavigate()
  const news = useSelector(selectorNews)
  const { id } = useParams()

  const story = news.find((el) => el.id === Number(id))

  if (!story) {
    return <p>Загрузка...</p>
  }

  return (
    <div style={{ height: '100vh', margin:'20px 0'}}>
      <div>
        <Button
          onClick={() => {
            navigate('/')
          }}
        >
          Назад к новостям
        </Button>
      </div>

      <div>
        <h1>{story.title}</h1>
        <div className="news-details-info">
          <p>Author : {story.by}</p> -<p>{data(story.time)}</p>-
          {story.url && (
            <a href={story.url} target="_blank" rel="noreferrer">
              Читать в источнике
            </a>
          )}
        </div>
      </div>
      <div>
        <p>Комментарии ({story.kids?.length || 0})</p>
        {story.kids?.length > 0
          ? story.kids.map((id) => id)
          : 'комментариев нет'}
      </div>
    </div>
  )
}

export default NewsDetails

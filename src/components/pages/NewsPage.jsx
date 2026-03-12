import { getNewsIds, getNews } from '../../api/hackerNews'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewsItem } from './NewsItem'
import { selectorNewsIds, selectorNews } from '../../RTK/selectors/selectors'

export function NewsPage() {
  const dispatch = useDispatch()
  const newsIds = useSelector(selectorNewsIds)
  const story = useSelector(selectorNews)

  useEffect(() => {
    dispatch(getNewsIds())
  }, [])

  useEffect(() => {
    if (newsIds.length > 0) {
      dispatch(getNews(newsIds))
    }
  }, [newsIds])
console.log(story);
  return (
    <div>
      <ul className='news-page'>
        {story.map((el) => (
          <NewsItem key={el.id} el={el} />
        ))}
      </ul>
    </div>
  )
}

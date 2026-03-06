import { getNewsIds } from '../../api/hackerNews'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorNewsIds } from '../../RTK/selectors/selectors'

export function NewsPage() {
  const dispatch = useDispatch()
  const newsIds = useSelector(selectorNewsIds)

  useEffect(() => {
    dispatch(getNewsIds())
  }, [])
  console.log(newsIds)
  return (
    <div>
      <p>новости</p>
    </div>
  )
}

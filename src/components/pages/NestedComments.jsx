import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import { getComments } from '../../api/hackerNews'
import { selectorComment } from '../../RTK/selectors/selectors'
import { timeAgo } from '../shared/timeAgo'

function NestedComments({ id }) {
  const dispatch = useDispatch()
  const comment = useSelector(selectorComment(id))

  useEffect(() => {
    if (!comment) {
      dispatch(getComments(id))
    }
  }, [id, comment, dispatch])

  if (!comment) return <p>Загрузка...</p>

  return (
    <div className="nested-comment">
      <div className="comment-block-info">
        <p className="comment-block-info-by"> {comment.by}</p>
        <p className="comment-block-info-time">{timeAgo(comment.time)}</p>
      </div>
      {parse(comment.text || '')}
    </div>
  )
}

export default NestedComments

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getComments } from '../../api/hackerNews'
import { selectorComment } from '../../RTK/selectors/selectors'
import { timeAgo } from '../shared/timeAgo'
import parse from 'html-react-parser'
import NestedComments from './NestedComments'

function RootComments({ id }) {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const comment = useSelector(selectorComment(id))

  useEffect(() => {
    if (!comment) {
      dispatch(getComments(id))
    }
  }, [id, comment])

  if (!comment) {
    return <p>Загрузка комментариев</p>
  }

  return (
    <div className="comment-block">
      <div className="comment-block-info">
        <p className="comment-block-info-by"> {comment.by}</p>
        <p className="comment-block-info-time">{timeAgo(comment.time)}</p>
      </div>
      <div>{parse(comment.text || 'Комментариев нет')}</div>
      {comment.kids?.length > 0 && (
        <button onClick={() => setOpen(!open)} className="reply-btn">
          {open ? 'Скрыть ответы' : `Ответы (${comment.kids.length})`}
        </button>
      )}

      {open &&
        comment.kids?.map((childId) => (
          <NestedComments key={childId} id={childId} />
        ))}
    </div>
  )
}

export default RootComments

import Button from 'antd/es/button'
import { useDispatch } from 'react-redux'
import { getComments } from '../../api/hackerNews'

function UpdateComments({ story }) {
  const dispatch = useDispatch()

  const updateComments = () => {
    if (!story.kids) return

    story.kids.forEach((id) => {
      dispatch(getComments(id))
    })
  }

  return <Button onClick={updateComments}>Update</Button>
}

export default UpdateComments

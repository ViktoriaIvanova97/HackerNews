import Button from 'antd/es/button'
import { useDispatch } from 'react-redux'
import { getNewsIds } from '../../api/hackerNews'

function UpdateButton() {
  const dispatch = useDispatch()
  const updateNews = () => {
    dispatch(getNewsIds())
  }

  return <Button onClick={updateNews}>Update</Button>
}

export default UpdateButton

import { Layout } from 'antd'
import { NewsPage } from './NewsPage'
import { UpdateButton } from '../shared/UpdateButton'

const { Header, Content } = Layout

export function MainPage() {
  return (
    <Layout>
      <Header>
        <div className='header'>
          <p>Hacker News</p>
          <UpdateButton />
        </div>
      </Header>
      <Content>
        <NewsPage />
      </Content>
    </Layout>
  )
}

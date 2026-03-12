import { Layout } from 'antd'
import { Routes, Route, useLocation } from 'react-router-dom'
import { NewsPage } from './NewsPage'
import UpdateButton from '../shared/UpdateButton'
import NewsDetails from './NewsDetails'

const { Header, Content } = Layout

export function MainPage() {
  return (
    <Layout>
      <Header>
        <div className="header">
          <p>Hacker News</p>
          <UpdateButton />
        </div>
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>

      </Content>
    </Layout>
  )
}

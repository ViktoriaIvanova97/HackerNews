import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_NEWS = import.meta.env.VITE_NEWS
const API_NEWS_ID = import.meta.env.VITE_NEWS_ID

export const getNewsIds = createAsyncThunk(
  'news/getNewsIds',
  async (_, thunkAPI) => {
    try {
      const { data: ids } = await axios.get(`${API_NEWS}`)
      const limitedIds = ids.slice(0, 100)
      return limitedIds
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getNews = createAsyncThunk(
  'news/getNews',
  async (ids, thunkAPI) => {
    try {
      const items = ids.map((el) => axios.get(`${API_NEWS_ID}${el}.json`))
      const responses = await Promise.all(items)
      const result = responses
        .map((el) => el.data)
        .sort((a, b) => b.time - a.time)

      return result
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

import { createSlice } from '@reduxjs/toolkit'
import { getNewsIds , getNews} from '../../api/hackerNews'

const initialState = {
  ids: [],
  items:[],
  error: null,
  loading: false,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsIds.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getNewsIds.fulfilled, (state, action) => {
        state.ids = action.payload
        state.loading = false
      })
      .addCase(getNewsIds.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(getNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(getNews.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})


export default newsSlice.reducer

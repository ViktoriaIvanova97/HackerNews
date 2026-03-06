import { createSlice } from '@reduxjs/toolkit'
import { getNewsIds } from '../../api/hackerNews'

const initialState = {
  ids: [],
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
  },
})


export default newsSlice.reducer

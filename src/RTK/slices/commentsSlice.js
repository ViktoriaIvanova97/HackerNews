import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../api/hackerNews";

const initialState = {
	comments: {},
	loading: false,
	error:null
}


const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
	  builder
		.addCase(getComments.pending, (state) => {
		  state.loading = true
		  state.error = null
		})
		.addCase(getComments.fulfilled, (state, action) => {
		  const comment = action.payload
			state.comments[comment.id] = comment
			state.loading = false
		})
		.addCase(getComments.rejected, (state, action) => {
		  state.error = action.payload
		  state.loading = false
		})
	},
})
  
export default commentsSlice.reducer
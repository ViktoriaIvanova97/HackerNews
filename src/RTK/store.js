import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import newsReducer from './slices/newsSlice'
import commentsReducer from './slices/commentsSlice'

const newsIdsPersist = {
  key: 'news',
  storage,
  whitelist: ['ids', 'items'],
}

const commentsPersist = {
  key: 'comments',
  storage,
  whitelist:['comments']
}

const rootReduser = combineReducers({
  news: persistReducer(newsIdsPersist, newsReducer),
  comments: persistReducer(commentsPersist, commentsReducer)
})

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


export const persistor = persistStore(store)
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import newsReducer from './slices/newsSlice'

const newsIdsPersist = {
  key: 'news',
  storage,
  whitelist: ['ids'],
}

const rootReduser = combineReducers({
  news: persistReducer(newsIdsPersist, newsReducer),
})

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


export const persistor = persistStore(store)
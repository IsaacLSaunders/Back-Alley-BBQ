import { configureStore } from '@reduxjs/toolkit'
import calcReducer from './meatSlice'

export const store = configureStore({
  reducer: {
    calculator: calcReducer,
  },
})

//infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
//Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


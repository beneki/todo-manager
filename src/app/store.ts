import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from '../features/todo/todo-slice'
import { apiSlice } from '../features/crud/todo-api-slice'

export const store = configureStore({
  reducer: {
    toDo: ToDoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

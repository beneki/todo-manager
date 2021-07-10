import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from '../features/todo/todo-slice'

const testReduxStore = configureStore({
  reducer: {
    toDo: ToDoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  },
})
export default testReduxStore

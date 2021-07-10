import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToDoState, ITask } from '../../interfaces'

const initialState: IToDoState = {
  toDoList: [],
  isFirstRequest: true,
}

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    setFirstRequestDone(state) {
      state.isFirstRequest = false
    },
    syncToDo(state, action: PayloadAction<ITask[]>) {
      state.toDoList = action.payload
    },
    addToDo(state, action: PayloadAction<ITask>) {
      state.toDoList.push(action.payload)
    },
    editToDo(state, action: PayloadAction<ITask>) {
      const payload = action.payload
      state.toDoList.forEach((task: ITask) => {
        if (task.id === action.payload.id) {
          task.id = payload.id
          task.title = payload.title
        }
      })
    },
    deleteToDo(state, action: PayloadAction<string>) {
      const id = action.payload
      const ix = state.toDoList.findIndex((task: ITask) => task.id === id)
      state.toDoList.splice(ix, 1)
    },
  },
})

export const { setFirstRequestDone, syncToDo, addToDo, editToDo, deleteToDo } =
  toDoSlice.actions
export default toDoSlice.reducer

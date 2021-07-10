export interface ITask {
  id: string
  title: string
}

export interface IToDoState {
  toDoList: ITask[]
  isFirstRequest: boolean
}

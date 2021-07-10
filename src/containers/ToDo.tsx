import { useAppDispatch, useAppSelector } from '../app/hooks'
import { List, Item, Input } from '../components'
import {
  syncToDo,
  addToDo,
  editToDo,
  deleteToDo,
  setFirstRequestDone,
} from '../features/todo/todo-slice'
import { v4 as uuidv4 } from 'uuid'
import { RootState } from '../app/store'
import { IToDoState, ITask } from '../interfaces'
import { useEffect } from 'react'
interface Props {
  tasks: ITask[]
}

function ToDo(props: Props) {
  const data = props.tasks
  const { toDoList, isFirstRequest }: IToDoState = useAppSelector(
    (state: RootState) => state.toDo
  )
  const dispatch = useAppDispatch()

  const onSubmit = (title: string) => {
    const id = uuidv4()
    const newTask: ITask = {
      // generating id just for test purpose
      id,
      title,
    }
    dispatch(addToDo(newTask))
  }

  const onItemSubmit = (id: string, title: string, isDelete?: boolean) => {
    if (isDelete) {
      // edit cuurent item
      setTimeout(function () {
        // using timeout just to see getting-done process of the task
        dispatch(deleteToDo(id))
      }, 1000)
    } else {
      // delete cuurent item
      const editedTask = { id, title, status }
      dispatch(editToDo(editedTask))
    }
  }

  useEffect(() => {
    // here am transfering data from RTK to state management - just at first load (Redux)
    if (isFirstRequest && data.length > 0) {
      dispatch(syncToDo(data))
      dispatch(setFirstRequestDone())
    }
  }, [data, dispatch, isFirstRequest])

  return (
    <>
      <Input name="task entry" onSubmit={onSubmit} />
      <List>
        {toDoList.map((itm: ITask) => (
          <Item key={itm.id} onSubmit={onItemSubmit} itm={itm} />
        ))}
      </List>
    </>
  )
}

export default ToDo

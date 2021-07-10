import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'
import { Button, BTN_VARIANT, ALIGN } from '../components'
import { useSyncToDoListMutation } from '../features/crud/todo-api-slice'
import { ITask } from '../interfaces'

const Container = styled.div``

function Toolkit() {
  const [syncToDoList, { isLoading }] = useSyncToDoListMutation()
  const toDoList: ITask[] = useAppSelector(
    (state: RootState) => state.toDo.toDoList
  )

  const onConfirm = async () => {
    try {
      await syncToDoList({ tasks: toDoList }).unwrap()
    } catch {
      console.log('some error happend')
    }
  }
  return (
    <Container>
      <Button
        variant={BTN_VARIANT.PRIMARY}
        align={ALIGN.RIGHT}
        callBack={onConfirm}
        label="Persist it to Data Base"
        disabled={isLoading ? true : false}
      />
    </Container>
  )
}

export default Toolkit

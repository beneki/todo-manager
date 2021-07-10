import styled from 'styled-components'

const TodoList = styled.div``

export const List = (props: any) => {
  return <TodoList>{props.children}</TodoList>
}

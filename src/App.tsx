import { useFetchToDoListQuery } from './features/crud/todo-api-slice'
import ErrorBoundary from './ErrorBoundary'
import ToDo from './containers/ToDo'
import Toolkit from './containers/Toolkit'
import styled from 'styled-components'

const Container = styled.div`
  -webkit-box-shadow: -3px 7px 8px 0px rgb(167 167 167 / 75%);
  -moz-box-shadow: -3px 7px 8px 0px rgb(167 167 167 / 75%);
  box-shadow: -3px 7px 8px 0px rgb(167 167 167 / 75%);
  padding: 2rem;
  border-radius: 0.4rem;
`
function App() {
  const { data = { tasks: [] } } = useFetchToDoListQuery(10)

  return (
    <ErrorBoundary>
      <Container>
        <ToDo tasks={data.tasks} />
        <Toolkit />
      </Container>
    </ErrorBoundary>
  )
}

export default App

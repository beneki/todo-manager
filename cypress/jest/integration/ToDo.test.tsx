/**
 *
 * @type -> Integration test,
 * @description -> Using redux store and ToDo component which itself includes multiple components
 * @tools -> Jest, RTL(React-Testing-Library)
 * @approach -> providing ToDo component redux store and supplying it with mocked-DB-Data
 */

import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from '@testing-library/react'
import ToDo from '../../../src/containers/ToDo'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import testReduxStore from '../../../src/app/choppedReduxStore'
import { ITask } from '../../../src/interfaces'

afterEach(cleanup)

describe('ToDo functionality', () => {
  test('when user type a task in main Input after enter main input should be cleared and that task should be added to dom ', async () => {
    const mockedData: ITask[] = [
      // mockedData as initial state for redux state management
      { id: '0a222221-d228-4efc-9da0-62ebf0a0df41', title: 'something' },
      { id: '0a222231-d228-4efc-9da0-62ebf0a0df41', title: 'something else' },
      { id: '0a222241-d228-4efc-9da0-62ebf0a0df41', title: 'something else' },
      { id: '0a222251-d228-4efc-9da0-62ebf0a0df41', title: 'alex' },
      { id: '05dab969-16d6-4e69-9239-8e063be924f9', title: 'papak' },
    ]

    render(
      <Provider store={testReduxStore}>
        <ToDo tasks={mockedData} />
      </Provider>
    )

    const mainInput = screen.getByTestId('mainTodoInput')
    fireEvent.change(mainInput, {
      // type some text(task tex) into main Input
      target: { value: 'buy a house a book with $5453.0' },
    })
    fireEvent.keyPress(mainInput, {
      // hit enter
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })
    await waitFor(() => expect(mainInput).toHaveValue('')) // wait async actions to be done and check whether Input value got empty
    const addedTask = screen.getByText('buy a house a book with $5453.0')
    expect(addedTask).toBeInTheDocument() // check whether the new task added to dom
  })
})

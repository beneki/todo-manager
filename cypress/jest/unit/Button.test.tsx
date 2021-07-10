/**
 *
 * @type -> Unit tests
 * @description -> Using redux store and ToDo component which itself includes multiple components
 * @tools -> Jest, RTL(React-Testing-Library)
 * @approach -> writing tests on top of Storybook
 */

import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import ReactDOM from 'react-dom'
import { ButtonProps } from '../../../src/components/Button'
import {
  Primary,
  Default,
  Disabled,
} from '../../../src/components/Button/Button.stories'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('button renders correctly', () => {
  const primaryLbl = Primary.args?.label || 'Primary'
  const defaultLbl = Default.args?.label || 'Default'

  test('button gets rendered without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Primary label="Hello" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  test('button Primary gets rendered correctly', () => {
    render(<Primary {...(Primary.args as ButtonProps)} />)
    expect(screen.getByRole('button')).toHaveTextContent(primaryLbl)
  })
  test('button Default gets rendered correctly', () => {
    render(<Default {...(Default.args as ButtonProps)} />)
    expect(screen.getByRole('button')).toHaveTextContent(defaultLbl)
  })
  test('button gets rendered correctly even with undefined "variant" prop', () => {
    render(
      <Primary {...({ ...Primary.args, variant: undefined } as ButtonProps)} />
    )
    expect(screen.getByRole('button')).toHaveTextContent(primaryLbl)
  })
  test('button gets rendered correctly even with undefined "align" prop', () => {
    render(
      <Default {...({ ...Default.args, align: undefined } as ButtonProps)} />
    )
    expect(screen.getByRole('button')).toHaveTextContent(defaultLbl)
  })
  test('disable button and change its theme when disabled flag is on', () => {
    render(
      <Disabled {...({ ...Default.args, disabled: true } as ButtonProps)} />
    )
    expect(screen.getByRole('button')).toHaveTextContent(defaultLbl)
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })
})

describe('button functionality', () => {
  test('when button is clicked handler should be called 1 time', () => {
    const mockCallback = jest.fn()
    render(
      <Default
        {...({ ...Default.args, callBack: mockCallback } as ButtonProps)}
      />
    )
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})

// comment in the test down below to take a new snapshot of the component(Button)
// test('matches snapshot', () => {
//   const { asFragment } = render(<Primary {...(Primary.args as ButtonProps)} />)
//   expect(asFragment()).toMatchSnapshot()
// })

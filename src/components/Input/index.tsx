import { useState } from 'react'
import styled from 'styled-components'

const TodoInput = styled.input`
  border-radius: 0.4rem;
  width: 99.5%;
  margin-bottom: 2rem;
  padding: 0 0.8rem;
  border: 0 none;
  height: 2.6rem;
  -webkit-box-shadow: -2px 2px 3px 0px rgb(204 204 204 / 75%);
  -moz-box-shadow: -2px 2px 3px 0px rgb(204 204 204 / 75%);
  box-shadow: -2px 2px 3px 0px rgb(204 204 204 / 75%);
  box-sizing: border-box;
  &:focus {
    background-color: #f9f9f9;
    border: 0 none;
  }
`
interface InputProps {
  name: string
  onSubmit: (val: string, changeStatus?: boolean) => void
  defVal?: string
}

export const Input = (props: InputProps) => {
  const [val, setVal] = useState(props.defVal || '')
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setVal('')
      props.onSubmit(val)
    }
  }
  return (
    <TodoInput
      type="text"
      name={props.name}
      placeholder="Write down your task and hit enter"
      onChange={(e) => setVal(e.target.value)}
      onKeyPress={onKeyPress}
      value={val}
    />
  )
}

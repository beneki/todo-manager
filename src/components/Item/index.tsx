import { useState } from 'react'
import { Input } from './../Input'
import styled from 'styled-components'
import { ITask } from '../../interfaces'

const TodoItem = styled.div`
  width: 99.5%;
  margin-bottom: 0.5rem;
  padding: 0 0.8rem;
  border: 0 none;
  height: 2.4rem;
  line-height: 2.4;

  border-bottom: ${(props: { txtDeco: boolean; isEdit: boolean }) =>
    props.isEdit ? 'none' : '1px solid #e0e0e0'};
  box-sizing: border-box;
  text-decoration: ${(props: { txtDeco: boolean; isEdit: boolean }) =>
    props.txtDeco ? 'line-through' : 'none'};
  &:hover {
    cursor: pointer;
  }
  > span {
    margin-left: 0.3rem;
    padding: 0 0.2rem;
    width: 3rem;
    text-align: center;
    height: 18px;
    line-height: 16px;
    border: 1px solid #cacaca;

    border-radius: 1rem;
    float: right;
    margin-top: 7px;
    &:hover {
      cursor: pointer;
      background: blue;
    }
    &:first-child {
      border-color: #fbaaaa;
      margin-left: 0.3rem;
      &:hover {
        background: #fbaaaa;
      }
    }
  }
  &:focus {
    background-color: #8a8aff;
    border: 0 none;
  }
`
interface ItemProps {
  itm: ITask
  onSubmit: (id: string, title: string, isDelete?: boolean) => void
  key: string
}

export const Item = (props: ItemProps) => {
  const itm = props.itm
  const [isTxtThru, setTxtThru] = useState(false)
  const [isEdit, toggleEdit] = useState(false)
  const onInputHit = (val: string, changeStatus?: boolean) => {
    let shouldDeleteTxt = false
    if (changeStatus) {
      if (isEdit) return
      setTxtThru((state: boolean) => {
        shouldDeleteTxt = true
        return !state
      })
    }
    props.onSubmit(props.itm.id, val, shouldDeleteTxt || isTxtThru)
    toggleEdit(false)
  }

  const onEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    toggleEdit(true)
  }
  const renderContent = () =>
    isEdit ? (
      <Input name={`task-${itm.id}`} onSubmit={onInputHit} defVal={itm.title} />
    ) : (
      <>
        {itm.title}
        <span>Delete</span>
        <span onMouseDown={onEdit} role="button" tabIndex={-1}>
          Edit
        </span>
      </>
    )

  return (
    <>
      <TodoItem
        txtDeco={isTxtThru}
        isEdit={isEdit}
        onClick={() => onInputHit('', true)}
      >
        {renderContent()}
      </TodoItem>
    </>
  )
}

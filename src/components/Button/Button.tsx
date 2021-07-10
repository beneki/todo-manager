import styled from 'styled-components'
import { BTN_VARIANT, ALIGN, ButtonProps, StyleProps } from './utils'
// import { fetchTaskList, selectTask } from '../redux/modules/task'

const alignment: any = {
  [ALIGN.LEFT]: `
    margin-right: auto;
    margin-left: 0;
  `,
  [ALIGN.RIGHT]: `
    margin-left: auto;
    margin-right: 0;
  `,
}

const variant: any = {
  [BTN_VARIANT.PRIMARY]: `
    background: #2196f3;
    color: #fff;
  `,
  [BTN_VARIANT.DEFAULT]: `
    background: #fff;
    color: #000;
  `,
  [BTN_VARIANT.DISABLED]: `
    background: #d0d0d0;
    color: #a9a9a9;
`,
}

const StButton = styled.button`
  -webkit-box-shadow: -2px 2px 3px 0px rgb(204 204 204 / 75%);
  -moz-box-shadow: -2px 2px 3px 0px rgb(204 204 204 / 75%);
  box-shadow: -2px 2px 3px 0px rgb(204 204 204 / 75%);
  border: none;
  color: white;
  padding: 9px 18px;
  text-align: center;
  background: white;
  ${(props: StyleProps) => variant[props.variant || BTN_VARIANT.DEFAULT]};
  ${(props: StyleProps) => alignment[props.align || ALIGN.LEFT]};
  display: block;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`

export const Button = ({
  variant,
  label,
  align,
  callBack,
  disabled,
}: ButtonProps) => {
  const disabledProp = disabled ? { disabled } : {}
  return (
    <StButton
      data-testid="btn"
      variant={disabled ? BTN_VARIANT.DISABLED : variant}
      align={align}
      onClick={callBack}
      {...disabledProp}
    >
      {label}
    </StButton>
  )
}

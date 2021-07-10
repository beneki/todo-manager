export enum BTN_VARIANT {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  DISABLED = 'disabled',
}

export enum ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface StyleProps {
  variant?: BTN_VARIANT
  align?: ALIGN
}

export interface ButtonProps extends StyleProps {
  label: string
  callBack?: () => void
  disabled?: boolean
}

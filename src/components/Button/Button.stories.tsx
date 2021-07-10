import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, BTN_VARIANT, ALIGN, ButtonProps } from '.'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const Template = (args: ButtonProps) => <Button {...args} />

export const Primary: Story<ButtonProps> = Template.bind({})
Primary.args = {
  variant: BTN_VARIANT.PRIMARY,
  label: 'Primary',
  align: ALIGN.RIGHT,
}

export const Default: Story<ButtonProps> = Template.bind({})
Default.args = {
  variant: BTN_VARIANT.DEFAULT,
  label: 'Default',
  align: ALIGN.LEFT,
}

export const Disabled: Story<ButtonProps> = Template.bind({})
Disabled.args = {
  variant: BTN_VARIANT.DISABLED,
  label: 'Disabled',
  align: ALIGN.LEFT,
  disabled: true,
}

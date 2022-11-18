import { withInstall, withNoopInstall } from '@yu/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const YuButton = withInstall(Button, {
  ButtonGroup,
})
export const YuButtonGroup = withNoopInstall(ButtonGroup)
export default YuButton

export * from './src/button'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'

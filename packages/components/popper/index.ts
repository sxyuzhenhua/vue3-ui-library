import { withInstall } from '@yu/utils'
import Popper from './src/popper.vue'

import YuPopperArrow from './src/arrow.vue'
import YuPopperTrigger from './src/trigger.vue'
import YuPopperContent from './src/content.vue'

export { YuPopperArrow, YuPopperTrigger, YuPopperContent }

export const YuPopper = withInstall(Popper)
export default YuPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'

export type { Placement, Options } from '@popperjs/core'

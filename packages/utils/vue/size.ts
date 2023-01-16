import { componentSizeMap } from '@yu/constants'

import type { ComponentSize } from '@yu/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}

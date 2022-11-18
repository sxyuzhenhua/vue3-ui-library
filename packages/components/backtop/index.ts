import { withInstall } from '@yu/utils'

import Backtop from './src/backtop.vue'

export const YuBacktop = withInstall(Backtop)
export default YuBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'

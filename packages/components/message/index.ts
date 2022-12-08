import { withInstallFunction } from '@yu/utils'

import Message from './src/method'

export const YuMessage = withInstallFunction(Message, '$message')
export default YuMessage
export * from './src/message'

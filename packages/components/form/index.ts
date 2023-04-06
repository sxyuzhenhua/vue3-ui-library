import { withInstall, withNoopInstall } from '@yu/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const YuForm = withInstall(Form, {
  FormItem,
})
export default YuForm
export const YuFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>

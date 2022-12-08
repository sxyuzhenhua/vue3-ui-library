import { mount } from '@vue/test-utils'
import ConfigProvider from '../src/config-provider.ts'

const AXIOM = 'Rem is the best girl'

describe('ConfigProvider.vue', () => {
  test('render test', () => {
    const wrapper = mount(ConfigProvider, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})

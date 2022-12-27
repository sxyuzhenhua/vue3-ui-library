import { mount } from '@vue/test-utils'
import Slot from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Slot.vue', () => {
  test('render test', () => {
    const wrapper = mount(Slot, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})

import { mount } from "@vue/test-utils";
import Popper from "../src/index.vue";

const AXIOM = "Rem is the best girl";

describe("Popper.vue", () => {
  test("render test", () => {
    const wrapper = mount(Popper, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});

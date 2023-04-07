import { mount } from "@vue/test-utils";
import FocusTrap from "../src/tokens.ts";

const AXIOM = "Rem is the best girl";

describe("FocusTrap.vue", () => {
  test("render test", () => {
    const wrapper = mount(FocusTrap, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});

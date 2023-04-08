import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    YuBacktop: typeof import("../packages/vue-yu-mi")["YuBacktop"];
    YuBadge: typeof import("../packages/vue-yu-mi")["YuBadge"];
    YuButton: typeof import("../packages/vue-yu-mi")["YuButton"];
    YuButtonGroup: typeof import("../packages/vue-yu-mi")["YuButtonGroup"];
    YuCol: typeof import("../packages/vue-yu-mi")["YuCol"];
    YuColorPicker: typeof import("../packages/vue-yu-mi")["YuColorPicker"];
    YuDropdown: typeof import("../packages/vue-yu-mi")["YuDropdown"];
    YuDropdownItem: typeof import("../packages/vue-yu-mi")["YuDropdownItem"];
    YuDropdownMenu: typeof import("../packages/vue-yu-mi")["YuDropdownMenu"];
    YuIcon: typeof import("../packages/vue-yu-mi")["YuIcon"];
    YuInput: typeof import("../packages/vue-yu-mi")["YuInput"];
    YuInputNumber: typeof import("../packages/vue-yu-mi")["YuInputNumber"];
    YuLink: typeof import("../packages/vue-yu-mi")["YuLink"];
    YuOption: typeof import("../packages/vue-yu-mi")["YuOption"];
    YuOptionGroup: typeof import("../packages/vue-yu-mi")["YuOptionGroup"];
    YuRow: typeof import("../packages/vue-yu-mi")["YuRow"];
    YuScrollbar: typeof import("../packages/vue-yu-mi")["YuScrollbar"];
    YuSelect: typeof import("../packages/vue-yu-mi")["YuSelect"];
    YuSlider: typeof import("../packages/vue-yu-mi")["YuSlider"];
    YuSwitch: typeof import("../packages/vue-yu-mi")["YuSwitch"];
    YuTag: typeof import("../packages/vue-yu-mi")["YuTag"];
    YuTooltip: typeof import("../packages/vue-yu-mi")["YuTooltip"];
  }

  interface ComponentCustomProperties {
    $message: typeof import("../packages/vue-yu-mi")["YuMessage"];
  }
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    YuBacktop: typeof import("vue-yu-mi")["YuBacktop"];
    YuBadge: typeof import("vue-yu-mi")["YuBadge"];
    YuButton: typeof import("vue-yu-mi")["YuButton"];
    YuButtonGroup: typeof import("vue-yu-mi")["YuButtonGroup"];
    YuCol: typeof import("vue-yu-mi")["YuCol"];
    YuColorPicker: typeof import("vue-yu-mi")["YuColorPicker"];
    YuDropdown: typeof import("vue-yu-mi")["YuDropdown"];
    YuDropdownItem: typeof import("vue-yu-mi")["YuDropdownItem"];
    YuDropdownMenu: typeof import("vue-yu-mi")["YuDropdownMenu"];
    YuIcon: typeof import("vue-yu-mi")["YuIcon"];
    YuInput: typeof import("vue-yu-mi")["YuInput"];
    YuInputNumber: typeof import("vue-yu-mi")["YuInputNumber"];
    YuLink: typeof import("vue-yu-mi")["YuLink"];
    YuOption: typeof import("vue-yu-mi")["YuOption"];
    YuOptionGroup: typeof import("vue-yu-mi")["YuOptionGroup"];
    YuRow: typeof import("vue-yu-mi")["YuRow"];
    YuScrollbar: typeof import("vue-yu-mi")["YuScrollbar"];
    YuSelect: typeof import("vue-yu-mi")["YuSelect"];
    YuSlider: typeof import("vue-yu-mi")["YuSlider"];
    YuSwitch: typeof import("vue-yu-mi")["YuSwitch"];
    YuTag: typeof import("vue-yu-mi")["YuTag"];
    YuTooltip: typeof import("vue-yu-mi")["YuTooltip"];
  }

  interface ComponentCustomProperties {
    $message: typeof import("vue-yu-mi")["YuMessage"];
  }
}

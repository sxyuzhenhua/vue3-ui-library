declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    YuBacktop: typeof import("yu-element")["YuBacktop"];
    YuBadge: typeof import("yu-element")["YuBadge"];
    YuButton: typeof import("yu-element")["YuButton"];
    YuButtonGroup: typeof import("yu-element")["YuButtonGroup"];
    YuCol: typeof import("yu-element")["YuCol"];
    YuColorPicker: typeof import("yu-element")["YuColorPicker"];
    YuDropdown: typeof import("yu-element")["YuDropdown"];
    YuDropdownItem: typeof import("yu-element")["YuDropdownItem"];
    YuDropdownMenu: typeof import("yu-element")["YuDropdownMenu"];
    YuIcon: typeof import("yu-element")["YuIcon"];
    YuInput: typeof import("yu-element")["YuInput"];
    YuInputNumber: typeof import("yu-element")["YuInputNumber"];
    YuLink: typeof import("yu-element")["YuLink"];
    YuOption: typeof import("yu-element")["YuOption"];
    YuOptionGroup: typeof import("yu-element")["YuOptionGroup"];
    YuRow: typeof import("yu-element")["YuRow"];
    YuScrollbar: typeof import("yu-element")["YuScrollbar"];
    YuSelect: typeof import("yu-element")["YuSelect"];
    YuSlider: typeof import("yu-element")["YuSlider"];
    YuSwitch: typeof import("yu-element")["YuSwitch"];
    YuTag: typeof import("yu-element")["YuTag"];
    YuTooltip: typeof import("yu-element")["YuTooltip"];
  }

  interface ComponentCustomProperties {
    $message: typeof import("yu-element")["YuMessage"];
  }
}

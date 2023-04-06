import '@vue/runtime-core'

declare module '@vue/runtime-core' {
    // GlobalComponents for Volar
    export interface GlobalComponents{
        YuBacktop: typeof import('../packages/yu-element')['YuBacktop']
        YuBadge: typeof import('../packages/yu-element')['YuBadge']
        YuButton: typeof import('../packages/yu-element')['YuButton']
        YuButtonGroup: typeof import('../packages/yu-element')['YuButtonGroup']
        YuCol: typeof import('../packages/yu-element')['YuCol']
        YuColorPicker: typeof import('../packages/yu-element')['YuColorPicker']
        YuDropdown: typeof import('../packages/yu-element')['YuDropdown']
        YuDropdownItem: typeof import('../packages/yu-element')['YuDropdownItem']
        YuDropdownMenu: typeof import('../packages/yu-element')['YuDropdownMenu']
        YuIcon: typeof import('../packages/yu-element')['YuIcon']
        YuInput: typeof import('../packages/yu-element')['YuInput']
        YuInputNumber: typeof import('../packages/yu-element')['YuInputNumber']
        YuLink: typeof import('../packages/yu-element')['YuLink']
        YuOption: typeof import('../packages/yu-element')['YuOption']
        YuOptionGroup: typeof import('../packages/yu-element')['YuOptionGroup']
        YuRow: typeof import('../packages/yu-element')['YuRow']
        YuScrollbar: typeof import('../packages/yu-element')['YuScrollbar']
        YuSelect: typeof import('../packages/yu-element')['YuSelect']
        YuSlider: typeof import('../packages/yu-element')['YuSlider']
        YuSwitch: typeof import('../packages/yu-element')['YuSwitch']
        YuTag: typeof import('../packages/yu-element')['YuTag']
        YuTooltip: typeof import('../packages/yu-element')['YuTooltip']
    }

    interface ComponentCustomProperties {
        $message: typeof import('../packages/yu-element')['YuMessage']
    }
}
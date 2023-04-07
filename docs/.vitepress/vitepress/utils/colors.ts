import { getCurrentInstance, ref, watch } from "vue";
import { useClipboard } from "@vueuse/core";
import { isDark } from "~/composables/dark";
export const getCssVarName = (namespace: string, type: string) => {
  return type ? `--yu-${namespace}-${type}` : `--yu-${namespace}`;
};

/**
 * get css var value by css var name
 * @param name
 * @returns
 */
export const getCssVarValue = (name: string) => {
  const val = ref(
    getComputedStyle(document.documentElement).getPropertyValue(name)
  );
  watch(
    () => isDark.value,
    () => {
      setTimeout(() => {
        val.value = getComputedStyle(document.documentElement).getPropertyValue(
          name
        );
      }, 100);
    }
  );
  return val;
};

export const getColorValue = (type: string) => {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    `--yu-color-${type}`
  );
  return color;
};

// copy color

export const useCopyColor = () => {
  const source = ref("");
  const { copy, isSupported } = useClipboard({ source });

  const vm = getCurrentInstance()!;
  const copyColor = async (colorType: string) => {
    const colorValue = getColorValue(colorType);
    source.value = colorValue;
    const { $message } = vm.appContext.config.globalProperties;
    if (!isSupported) {
      $message.error("Copy failed");
    }
    try {
      await copy();
      $message.success(`--yu-color-${colorType}: ${source.value}`);
    } catch (e: any) {
      $message.error(e.message);
    }
  };

  return {
    copyColor,
  };
};

/**
 * 16进制颜色转换成rgba
 * @param hex
 * @param opacity
 * @returns
 */
export function hexToRgb(hex, opacity) {
  hex = hex.trim();
  if (opacity <= 0 && opacity >= 1) {
    opacity = 0.9;
  }
  return `rgb(${Number.parseInt(`0x${hex.slice(1, 3)}`)},${Number.parseInt(
    `0x${hex.slice(3, 5)}`
  )},${Number.parseInt(`0x${hex.slice(5, 7)}`)},${opacity})`;
}

export function modifyColor(curColor) {
  const rootEl = document.documentElement;
  const style = rootEl.style;
  style.setProperty("--yu-color-primary", curColor);
  localStorage.setItem("--yu-color-primary", curColor);
  style.setProperty("--yu-color-primary-light-3", hexToRgb(curColor, 0.1));
  style.setProperty("--yu-color-primary-light-5", hexToRgb(curColor, 0.2));
  style.setProperty("--yu-color-primary-light-7", hexToRgb(curColor, 0.3));
  style.setProperty("--yu-color-primary-light-8", hexToRgb(curColor, 0.4));
  style.setProperty("--yu-color-primary-light-9", hexToRgb(curColor, 0.5));
}

import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark({
  storageKey: "yu-theme-appearance", // yuzhenhua
});

export const toggleDark = useToggle(isDark);

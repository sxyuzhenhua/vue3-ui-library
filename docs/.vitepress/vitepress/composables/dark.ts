import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'el-theme-appearance', // yuzhenhua
})

export const toggleDark = useToggle(isDark)


export { hasOwn } from '@vue/shared'

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>

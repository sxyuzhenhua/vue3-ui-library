import { isArray, isObject, isString } from '@vue/shared'

export {
    isArray,
    isFunction,
    isObject,
    isString,
    isDate,
    isPromise,
    isSymbol,
} from '@vue/shared'

export { isBoolean, isNumber } from '@vueuse/core'
export const isUndefined = (val: any): val is undefined => val === undefined

export const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
      return false
    }
    return !Number.isNaN(Number(val))
}

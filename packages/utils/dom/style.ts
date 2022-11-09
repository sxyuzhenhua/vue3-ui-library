import { isNumber, isObject, isString, isStringNumber } from '../types'

export function addUnit(value?: string | number, defaultUnit = 'px') {
    if (!value) return ''
    if (isNumber(value) || isStringNumber(value)) {
      return `${value}${defaultUnit}`
    } else if (isString(value)) {
      return value
    }
    console.log('binding value must be a string or number');
    // debugWarn(SCOPE, 'binding value must be a string or number')
  }
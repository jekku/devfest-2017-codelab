'use strict'

import { isEven } from './commons'

export const findLeftmostEven = (numbers) => {
  return numbers.find(isEven)
}

export const findLeftmostOdd = (numbers) => {
  return numbers.find( (number) => !isEven(number))
}

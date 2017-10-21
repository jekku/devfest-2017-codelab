'use strict'

import { isEven } from './commons'

export const getOddNumbers = (numbers) => {
  return numbers.filter( (number) => !isEven(number))
}

export const getEvenNumbers = (numbers) => {
  return numbers.filter(isEven)
}

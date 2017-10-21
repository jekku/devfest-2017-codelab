'use strict'

export const findLeftmostEven = (numbers) => {
  return numbers.find( (number) => number % 2 === 0)
}

export const findLeftmostOdd = (numbers) => {
  return numbers.find( (number) => number % 2 !== 0)
}

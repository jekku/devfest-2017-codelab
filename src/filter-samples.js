'use strict'

export const getOddNumbers = (numbers) => {
  return numbers.filter( (number) => number % 2 !== 0)
}

export const getEvenNumbers = (numbers) => {
  return numbers.filter( (number) => number % 2 === 0)
}

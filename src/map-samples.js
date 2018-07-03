'use strict'

export const doubledValues = (numbers) => {
  const result = []

  /*for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }*/
  numbers.map(x => {
  result.push(x*2)
  });
  return result
}

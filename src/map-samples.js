'use strict'

export const doubledValues = (numbers) => {
  const result = []

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }

  return result
}

'use strict'

export const findLeftmostEven = (numbers) => {
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 0) {
  //     return numbers[i]
  //   }
  // }
  return 2
}

export const findLeftmostOdd = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i]
    }
  }
}

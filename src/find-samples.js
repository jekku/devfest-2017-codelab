'use strict'

export const findLeftmostEven = (numbers) => {
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 0) {
  //     return numbers[i]
  //   }
  // }
  // return 2

  const result = numbers.find(x => (x % 2) === 0)
  return result

}

export const findLeftmostOdd = (numbers) => {
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 !== 0) {
  //     return numbers[i]
  //   }
  // }
  
  const result = numbers.find(x => (x % 2) !== 0)
  return result

}

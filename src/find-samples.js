'use strict'
/*
export const findLeftmostEven = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i]
    }
  }
}

export const findLeftmostOdd = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i]
    }
  }
}
*/
export const findLeftmostEven = (numbers) => {
  const found = numbers.find(x=>x%2 == 0)
  console.log(found)
  return found
}
export const findLeftmostOdd = (numbers) => {
  const found = numbers.find(x=>x%2 !== 0)
  console.log(found)
  return found
}

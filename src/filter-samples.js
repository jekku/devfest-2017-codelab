'use strict'
const isEven = (numbers) => {
  return numbers % 2 === 0
}
export const getOddNumbers = (numbers) => {
  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i])
    }
  }*/
  return numbers.filter((number) => {
    return !isEven(number)
  })
}

export const getEvenNumbers = (numbers) => {
  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i])
    }
  }*/
  return numbers.filter((number) => {
    return isEven(number)
  })
}

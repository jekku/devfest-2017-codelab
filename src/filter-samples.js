'use strict'

export const getOddNumbers = (numbers) => {
  const result = []

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 !== 0) {
  //     result.push(numbers[i])
  //   }
  // }

  numbers.filter(number => { if(number % 2 !== 0) result.push(number)})


  return result
}

export const getEvenNumbers = (numbers) => {
  const result = []

  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % 2 === 0) {
  //     result.push(numbers[i])
  //   }
  // }
  numbers.filter(number => { if(number % 2 === 0) result.push(number)})

  return result
}

'use strict'

export const getOddNumbers = (numbers) => {
  //const result = []

  /* for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i])
    }
  } */

    const result = numbers.filter(value => value % 2 !== 0);

    return result
}

export const getEvenNumbers = (numbers) => {
  //const result = []

  /* for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i])
    }
  } */

  const result = numbers.filter(value => value % 2 === 0);

  return result
}

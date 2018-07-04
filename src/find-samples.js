'use strict'

export const findLeftmostEven = (numbers) => {
  /* for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i]
    }
  } */

  const lmEven = numbers.find(value => value % 2 === 0);

  return lmEven


}

export const findLeftmostOdd = (numbers) => {
  /* for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i]
    }
  } */

  const lmOdd = numbers.find(value => value % 2 !== 0);

  return lmOdd
}

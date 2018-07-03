'use strict'
/*
export const doubledValues = (numbers) => {
  const result = []

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }

  return result
}
*/ 
export const doubledValues = (numbers) => {
  const doub = numbers.map(x=>x*2)
  //console.log(doub)
  return doub
}
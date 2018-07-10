'use strict'

export const findLeftmostEven = (numbers) => {
  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return numbers[i]
    }
  }*/
  const answer = numbers.find(function(x) {
     if (x % 2 === 0){
      return x;
     }
  })
  return answer;
}

export const findLeftmostOdd = (numbers) => {
  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return numbers[i]
    }
  }*/
 const answer = numbers.find(function(x) {
     if (x % 2 !== 0){
      return x;
     }
  })
  return answer;
}

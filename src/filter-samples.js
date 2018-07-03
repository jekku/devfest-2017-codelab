'use strict'

export const getOddNumbers = (numbers) => {
  const result = []

  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      result.push(numbers[i])
    }
  }*/
  
  numbers.filter(x => { 
	  if(x % 2 != 0){
	    result.push(x)
	  }
  })

  return result
}

export const getEvenNumbers = (numbers) => {
  const result = []

  /*for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i])
    }
  }*/
  
  numbers.filter(x => {
	  if(x % 2 == 0){
	  result.push(x)
	  }
  })
  return result
}

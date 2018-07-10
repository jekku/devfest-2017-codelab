'use strict'

export const rowMultiplication = (row) => {
  var result = 1;

  /*for (let i = 0; i < row.length; i++) {
    result = result * row[i]
  }*/

  const reducer = (result, row) =>  result * row;
  result = row.reduce(reducer);

  return result;
}

export const countDogBreed = (dogs) => {
  return dogs.reduce((count, dog)=> {
      if(count[dog.breed]){
        count[dog.breed] = count[dog.breed] + 1
      }else {
        count[dog.breed] = 1
      }
      return count
    },{})
}

'use strict'

export const rowMultiplication = (row) => {
  var result = 1;

  for (let i = 0; i < row.length; i++) {
    result = result * row[i]
  }

  return result
}

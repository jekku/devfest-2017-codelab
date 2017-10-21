'use strict'

export const rowMultiplication = (row) => {
  return row.reduce( (total, number) => total * number, 1)
}

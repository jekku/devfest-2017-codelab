import { rowMultiplication } from './../src/reduce-samples'
import { numbers } from './../src/data'

test('Should get total of the row multiplied', () => {
  expect(rowMultiplication(numbers)).toBe(24)
})

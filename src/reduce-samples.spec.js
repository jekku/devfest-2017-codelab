import { rowMultiplication } from './reduce-samples'
import { numbers } from './data'

test('Should get total of the row multiplied', () => {
  expect(rowMultiplication(numbers)).toBe(24)
})

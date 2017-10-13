import { getOddNumbers, getEvenNumbers } from './filter-samples'
import { numbers } from './data'

test('Should get all even numbers', () => {
  expect(getEvenNumbers(numbers)).toEqual([2, 4])
});

test('Should get all odd numbers', () => {
  expect(getOddNumbers(numbers)).toEqual([1, 3])
});

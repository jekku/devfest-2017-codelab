import { getOddNumbers, getEvenNumbers } from './../src/filter-samples'
import { numbers } from './../src/data'

test('Should get all even numbers', () => {
  expect(getEvenNumbers(numbers)).toEqual([2, 4])
});

test('Should get all odd numbers', () => {
  expect(getOddNumbers(numbers)).toEqual([1, 3])
});

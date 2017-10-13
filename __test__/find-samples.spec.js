import { findLeftmostOdd, findLeftmostEven } from './../src/find-samples'
import { numbers } from './../src/data'

test('Should be able to find first odd number', () => {
  expect(findLeftmostOdd(numbers)).toBe(1)
});

test('Should be able to find first even number', () => {
  expect(findLeftmostEven(numbers)).toBe(2)
});

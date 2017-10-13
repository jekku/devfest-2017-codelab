import { doubledValues } from './../src/map-samples'

test('Should double all the values in the array', () => {
  expect(doubledValues([3, 6, 9])).toEqual([6, 12, 18])
});

import { findXInArray } from '../findX';

test('find x in an array', () => {
  //ARRANGE
  let arrayIncludingX = [-1,1,2,2,3,4,5,5,5,6,7,7,7,7,9,10,11,23,45,999,999]
  expect(findXInArray(999, arrayIncludingX)).toBe(arrayIncludingX.length - 2);
});

test('return -1 when x is missing in an array', () => {
  //ARRANGE
  let arrayIncludingX = [-1,1,2,2,3,4,5,5,5,6,7,7,7,7,9,10,11,23,45,999,999]
  expect(findXInArray(-20, arrayIncludingX)).toBe(-1);
  expect(findXInArray(999999, arrayIncludingX)).toBe(-1);
  expect(findXInArray(8, arrayIncludingX)).toBe(-1);
});
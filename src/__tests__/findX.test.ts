// src/__tests__/calculator.test.ts
import { findXInArray } from '../findX';

test('find x in an Array', () => {
  
  //ARRANGE
  let arrayIncludingX = [1,2,3,4,555555,6,7,99999999,10]
  expect(findXInArray(5, arrayIncludingX)).toBe(4);
});
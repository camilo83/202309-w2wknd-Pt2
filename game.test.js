/* eslint-disable no-undef */
import { gameOfLife } from './game2.js';

describe('Given array', () => {
  test('blablabla', () => {
    const testData = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const rounds = 2;
    const rows = 3;
    const expected = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];
    const result = gameOfLife(testData, rounds, rows);
    expect(result).toStrictEqual(expected);
  });
});

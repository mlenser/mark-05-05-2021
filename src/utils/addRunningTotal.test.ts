import { addRunningTotal } from './addRunningTotal';

describe('addRunningTotal', () => {
  it('should add a running total', () => {
    const input = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
    ];
    const result = input.reduce(addRunningTotal, []);
    expect(result).toEqual([
      [1, 1, 1],
      [2, 2, 3],
      [3, 3, 6],
      [4, 4, 10],
      [5, 5, 15],
      [6, 6, 21],
      [7, 7, 28],
    ]);
  });
});

import { sumSize } from './sumSize';

const values = [
  [17, 2],
  [21.5, 3],
  [33.5, 7],
  [56.5, 1],
  [61, 61],
  [92.5, 4],
  [654, 5],
  [5542, 6],
];

describe('sumSize', () => {
  it('should sum sizes together', () => {
    const result = sumSize({ values });
    expect(result).toEqual(89);
  });
});

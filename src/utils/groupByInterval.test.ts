import { groupByInterval } from './groupByInterval';
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

describe('groupByInterval', () => {
  it('should group items together based on an interval', () => {
    const result = groupByInterval({ groupInterval: 10, values });
    expect(result).toEqual([
      [20, 5],
      [30, 7],
      [60, 62],
      [90, 4],
      [650, 5],
      [5540, 6],
    ]);
  });
  it('should group items together based on a larger interval', () => {
    const result = groupByInterval({ groupInterval: 50, values });
    expect(result).toEqual([
      [0, 5],
      [50, 69],
      [100, 4],
      [650, 5],
      [5550, 6],
    ]);
  });
  it('should group items together if the data is sorted in reverse', () => {
    const reverseValues = [
      [5542, 6],
      [654, 5],
      [92.5, 4],
      [61, 61],
      [56.5, 1],
      [33.5, 7],
      [21.5, 3],
      [17, 2],
    ];
    const result = groupByInterval({
      groupInterval: 50,
      values: reverseValues,
    });
    expect(result).toEqual([
      [5550, 6],
      [650, 5],
      [100, 4],
      [50, 69],
      [0, 5],
    ]);
  });
});

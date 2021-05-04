import { sortByPriceHighFirst, sortByPriceLowFirst } from './sortByPrice';

const numberList = [[5], [7], [1], [99], [4456], [0], [32]];

describe('sortByPrice', () => {
  describe('sortByPriceHighFirst', () => {
    it('should sort some numbers starting with the highest', () => {
      const result = numberList.sort(sortByPriceHighFirst);
      expect(result).toEqual([[4456], [99], [32], [7], [5], [1], [0]]);
    });
  });
  describe('sortByPriceLowFirst', () => {
    it('should sort some numbers starting with the lowest', () => {
      const result = numberList.sort(sortByPriceLowFirst);
      expect(result).toEqual([[0], [1], [5], [7], [32], [99], [4456]]);
    });
  });
});

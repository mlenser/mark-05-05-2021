import {
  addValue,
  removeValueByPrice,
  replaceValueByPrice,
} from './replaceOrRemoveValues';

describe('replaceOrRemoveValues', () => {
  describe('removeValueByPrice', () => {
    it('should return new data with size 0 items removed', () => {
      const values = [
        [56456.5, 6509],
        [56458, 11295],
        [56458.5, 70232],
        [56461, 1965],
      ];
      const result = removeValueByPrice({ removePrice: 56458, values });
      expect(result).toEqual([
        [56456.5, 6509],
        [56458.5, 70232],
        [56461, 1965],
      ]);
    });
  });
  describe('replaceValueByPrice', () => {
    it('should replace a value with a new one', () => {
      const values = [
        [56456.5, 6509],
        [56458, 11295],
        [56458.5, 70232],
        [56461, 1965],
      ];
      const result = replaceValueByPrice({
        indexToReplace: 1,
        newValue: [56458, 1],
        values,
      });
      expect(result).toEqual([
        [56456.5, 6509],
        [56458, 1],
        [56458.5, 70232],
        [56461, 1965],
      ]);
    });
  });
  describe('addValue', () => {
    it('should add a value', () => {
      const values = [
        [56456.5, 6509],
        [56458, 11295],
        [56458.5, 70232],
        [56461, 1965],
      ];
      const result = addValue({
        newValue: [44, 111],
        values,
      });
      expect(result).toEqual([
        [56456.5, 6509],
        [56458, 11295],
        [56458.5, 70232],
        [56461, 1965],
        [44, 111],
      ]);
    });
  });
});

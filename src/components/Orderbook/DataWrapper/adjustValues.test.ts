import {
  addValue,
  getNewValues,
  getValuesToRemove,
  removeValueByPrice,
  replaceValueByPrice,
} from './adjustValues';

describe('replaceOrRemoveValues', () => {
  describe('getValuesToRemove', () => {
    it('should return a list of prices to remove', () => {
      const values = [
        [56456.5, 0],
        [56458, 11295],
        [56458.5, 70232],
        [56461, 0],
      ];
      const result = getValuesToRemove({ newValues: values });
      expect(result).toEqual([56456.5, 56461]);
    });
  });
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
  describe('getNewValues', () => {
    it('should add and replace values', () => {
      const values = [
        [56456.5, 6509],
        [56458, 11295],
        [56458.5, 70232],
        [56461, 1965],
      ];
      const result = getNewValues({
        newValues: [
          [2, 2],
          [1, 1],
          [5, 5],
          [5, 5],
          [56458.5, 0],
          [56461, 111111111],
        ],
        values,
      });
      expect(result).toEqual([
        [56456.5, 6509],
        [56458, 11295],
        [56461, 111111111],
        [2, 2],
        [1, 1],
        [5, 5],
      ]);
    });
  });
});

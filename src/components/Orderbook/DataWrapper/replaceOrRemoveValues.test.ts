import { removeValueByPrice } from './replaceOrRemoveValues';

describe('replaceOrRemoveValues', () => {
  describe('getNewData', () => {
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
});

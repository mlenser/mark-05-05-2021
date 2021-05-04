import { SizePrice } from '../types/SizePrice';
import { roundToNearest } from './roundToNearest';

export const groupByInterval = ({
  groupInterval,
  values,
}: {
  groupInterval: number;
  values: SizePrice[];
}) => {
  if (groupInterval === 0.5) {
    // Data comes from the backend in this interval
    return values;
  }
  return values
    .map(([price, size]) => [
      roundToNearest({ interval: groupInterval, value: price }),
      size,
    ])
    .reduce((accumulator: SizePrice[], currentValue: SizePrice) => {
      const lastItemInAccumulator = accumulator[accumulator.length - 1];
      const previousPrice = Array.isArray(lastItemInAccumulator)
        ? lastItemInAccumulator[0]
        : 0;
      const currentPrice = currentValue[0];
      if (
        Array.isArray(lastItemInAccumulator) &&
        previousPrice === currentPrice
      ) {
        const currentSize = currentValue[1];
        lastItemInAccumulator[1] += currentSize;
        return accumulator;
      }

      return [...accumulator, currentValue];
    }, []);
};

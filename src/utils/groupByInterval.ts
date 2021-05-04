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
  return values.map(([price, size]) => [
    roundToNearest({ interval: groupInterval, value: price }),
    size,
  ]);
};

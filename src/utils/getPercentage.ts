import { roundToNearest } from './roundToNearest';

export const getPercentage = (value: number) =>
  `${roundToNearest({ interval: 1, value: value * 100 })}%`;

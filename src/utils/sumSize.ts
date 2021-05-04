import { SizePrice } from '../types/SizePrice';

export const sumSize = ({ values }: { values: SizePrice[] }) =>
  values.reduce(
    (accumulator: number, currentValue: SizePrice) =>
      accumulator + currentValue[1],
    0,
  );

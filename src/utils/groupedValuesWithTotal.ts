import { SizePrice } from '../types/SizePrice';
import { groupByInterval } from './groupByInterval';
import { addRunningTotal } from './addRunningTotal';

export const groupedValuesWithTotal = ({
  groupInterval,
  values,
}: {
  groupInterval: number;
  values: SizePrice[];
}) => {
  const groupedValues = groupByInterval({
    groupInterval,
    values,
  });
  return addRunningTotal(groupedValues);
};

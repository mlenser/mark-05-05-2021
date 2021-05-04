import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import { addRunningTotal } from '../../utils/addRunningTotal';
import { groupByInterval } from '../../utils/groupByInterval';
import PriceSizeTotal from './PriceSizeTotal';

type Props = {
  groupInterval: number;
  values: SizePrice[];
};

const Asks: React.FC<Props> = ({ groupInterval, values }) => {
  const sortedValues = values.sort(sortByPriceLowFirst);
  const groupedValues = groupByInterval({
    groupInterval,
    values: sortedValues,
  });
  const valuesWithTotal = addRunningTotal(groupedValues);
  return (
    <div>
      <PriceSizeTotal type="asks" values={valuesWithTotal} />
    </div>
  );
};

export default Asks;

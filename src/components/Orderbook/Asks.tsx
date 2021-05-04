import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import { addRunningTotal } from '../../utils/addRunningTotal';
import { groupByInterval } from '../../utils/groupByInterval';
import PriceSizeTotal from './PriceSizeTotal';

type Props = {
  group: number;
  values: SizePrice[];
};

const Asks: React.FC<Props> = ({ group, values }) => {
  const sortedValues = values.sort(sortByPriceLowFirst);
  const groupedValues = groupByInterval({ group, values: sortedValues });
  const valuesWithTotal = addRunningTotal(groupedValues);
  return (
    <div>
      <PriceSizeTotal type="asks" values={valuesWithTotal} />
    </div>
  );
};

export default Asks;

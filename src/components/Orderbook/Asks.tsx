import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import { addRunningTotal } from '../../utils/addRunningTotal';
import PriceSizeTotal from './PriceSizeTotal';

type Props = {
  values: SizePrice[];
};

const Asks: React.FC<Props> = ({ values }) => {
  const sortedValues = values.sort(sortByPriceLowFirst);
  const valuesWithTotal = sortedValues.reduce(addRunningTotal, []);
  return (
    <div>
      <PriceSizeTotal type="asks" values={valuesWithTotal} />
    </div>
  );
};

export default Asks;

import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { addRunningTotal } from '../../utils/addRunningTotal';
import PriceSizeTotal from './PriceSizeTotal';

type Props = {
  values: SizePrice[];
};

const Bids: React.FC<Props> = ({ values }) => {
  const sortedValues = values.sort(sortByPriceHighFirst);
  const valuesWithTotal = sortedValues.reduce(addRunningTotal, []);
  return (
    <div>
      <PriceSizeTotal values={valuesWithTotal} />
    </div>
  );
};

export default Bids;

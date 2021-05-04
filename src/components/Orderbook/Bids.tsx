import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { addRunningTotal } from '../../utils/addRunningTotal';
import PriceSizeTotal from './PriceSizeTotal';

type Props = {
  values: SizePrice[];
};

const Bids: React.FC<Props> = ({ values }) => {
  const sortedValues = values.sort(sortByPriceHighFirst);
  const valuesWithTotal = addRunningTotal(sortedValues);
  return (
    <div>
      <PriceSizeTotal
        order={['total', 'size', 'price']}
        type="bids"
        values={valuesWithTotal}
      />
    </div>
  );
};

export default Bids;

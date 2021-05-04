import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { formatNumber } from '../../utils/formatNumber';
import { addRunningTotal } from '../../utils/addRunningTotal';

type Props = {
  values: SizePrice[];
};

const Bids: React.FC<Props> = ({ values }) => {
  const sortedValues = values.sort(sortByPriceHighFirst);
  const valuesWithTotal = sortedValues.reduce(addRunningTotal, []);
  return (
    <div>
      {valuesWithTotal.map(([price, size, total]) => (
        <div key={`${price}-${size}-${total}`}>
          {formatNumber(price)}: {formatNumber(size)}: {formatNumber(total)}
        </div>
      ))}
    </div>
  );
};

export default Bids;

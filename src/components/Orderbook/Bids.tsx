import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { groupByInterval } from '../../utils/groupByInterval';
import { addRunningTotal } from '../../utils/addRunningTotal';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

const Bids: React.FC = () => {
  const { bidsValues, groupInterval } = useOrderbookContext();
  const sortedValues = bidsValues.sort(sortByPriceHighFirst);
  const groupedValues = groupByInterval({
    groupInterval,
    values: sortedValues,
  });
  const valuesWithTotal = addRunningTotal(groupedValues);
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

import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { groupByInterval } from '../../utils/groupByInterval';
import { addRunningTotal } from '../../utils/addRunningTotal';
import PriceSizeTotal from './PriceSizeTotal';

type Props = {
  groupInterval: number;
  values: SizePrice[];
};

const Bids: React.FC<Props> = ({ groupInterval, values }) => {
  const sortedValues = values.sort(sortByPriceHighFirst);
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

import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { groupByInterval } from '../../utils/groupByInterval';
import { addRunningTotal } from '../../utils/addRunningTotal';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Bids: React.FC<Props> = ({ aboveMobile }) => {
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
        order={aboveMobile ? ['total', 'size', 'price'] : undefined}
        type="bids"
        values={aboveMobile ? valuesWithTotal : valuesWithTotal.reverse()}
      />
    </div>
  );
};

export default Bids;

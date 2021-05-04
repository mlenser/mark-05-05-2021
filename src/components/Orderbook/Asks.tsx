import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import { addRunningTotal } from '../../utils/addRunningTotal';
import { groupByInterval } from '../../utils/groupByInterval';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Asks: React.FC<Props> = ({ aboveMobile }) => {
  const { asksValues, groupInterval } = useOrderbookContext();
  const sortedValues = asksValues.sort(sortByPriceLowFirst);
  const groupedValues = groupByInterval({
    groupInterval,
    values: sortedValues,
  });
  const valuesWithTotal = addRunningTotal(groupedValues);

  return (
    <div>
      <PriceSizeTotal
        showColumnHeadersBelow={!aboveMobile}
        type="asks"
        values={valuesWithTotal}
      />
    </div>
  );
};

export default Asks;

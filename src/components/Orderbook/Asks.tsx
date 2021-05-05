import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import { groupedValuesWithTotal } from '../../utils/groupedValuesWithTotal';
import { topValues } from '../../utils/topValues';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Asks: React.FC<Props> = ({ aboveMobile }) => {
  const { asksValues, groupInterval } = useOrderbookContext();
  const values = groupedValuesWithTotal({
    groupInterval,
    values: asksValues.sort(sortByPriceLowFirst),
  });

  return (
    <div>
      <PriceSizeTotal
        showColumnHeadersBelow={!aboveMobile}
        type="asks"
        values={topValues(values)}
      />
    </div>
  );
};

export default Asks;

import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';
import { groupedValuesWithTotal } from '../../utils/groupedValuesWithTotal';

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
        values={values}
      />
    </div>
  );
};

export default Asks;

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
  const valuesGroupedWithTotal = groupedValuesWithTotal({
    groupInterval,
    values: asksValues.sort(sortByPriceLowFirst),
  });
  const values = topValues(valuesGroupedWithTotal);

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

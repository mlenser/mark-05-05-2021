import React from 'react';
import { groupedValuesWithTotal } from '../../utils/groupedValuesWithTotal';
import { lastValues } from '../../utils/lastValues';
import { topValues } from '../../utils/topValues';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Bids: React.FC<Props> = ({ aboveMobile }) => {
  const { bidsValues, groupInterval } = useOrderbookContext();
  const valuesGroupedWithTotal = groupedValuesWithTotal({
    groupInterval,
    values: bidsValues,
  });
  const values = aboveMobile
    ? topValues(valuesGroupedWithTotal)
    : lastValues(valuesGroupedWithTotal.reverse());

  return (
    <div>
      <PriceSizeTotal
        order={aboveMobile ? ['total', 'size', 'price'] : undefined}
        type="bids"
        values={values}
      />
    </div>
  );
};

export default Bids;

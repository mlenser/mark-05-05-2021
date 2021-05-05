import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
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
  const values = groupedValuesWithTotal({
    groupInterval,
    values: bidsValues.sort(sortByPriceHighFirst),
  });

  return (
    <div>
      <PriceSizeTotal
        order={aboveMobile ? ['total', 'size', 'price'] : undefined}
        type="bids"
        values={aboveMobile ? topValues(values) : lastValues(values.reverse())}
      />
    </div>
  );
};

export default Bids;

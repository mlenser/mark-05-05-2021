import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';
import { groupedValuesWithTotal } from '../../utils/groupedValuesWithTotal';

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
        values={aboveMobile ? values : values.reverse()}
      />
    </div>
  );
};

export default Bids;

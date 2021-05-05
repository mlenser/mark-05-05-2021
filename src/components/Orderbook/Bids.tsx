import React from 'react';
import { lastValues } from '../../utils/lastValues';
import { topValues } from '../../utils/topValues';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Bids: React.FC<Props> = ({ aboveMobile }) => {
  const { bidsValuesForDisplay } = useOrderbookContext();
  const values = aboveMobile
    ? topValues(bidsValuesForDisplay)
    : lastValues(bidsValuesForDisplay.reverse());

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

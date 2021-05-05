import React from 'react';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Bids: React.FC<Props> = ({ aboveMobile }) => {
  const { bidsValuesForDisplay } = useOrderbookContext();

  return (
    <div>
      <PriceSizeTotal
        order={aboveMobile ? ['total', 'size', 'price'] : undefined}
        type="bids"
        values={bidsValuesForDisplay}
      />
    </div>
  );
};

export default Bids;

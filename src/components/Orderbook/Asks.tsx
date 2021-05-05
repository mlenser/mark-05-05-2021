import React from 'react';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Asks: React.FC<Props> = ({ aboveMobile }) => {
  const { asksValuesForDisplay } = useOrderbookContext();

  return (
    <div>
      <PriceSizeTotal
        showColumnHeadersBelow={!aboveMobile}
        type="asks"
        values={asksValuesForDisplay}
      />
    </div>
  );
};

export default Asks;

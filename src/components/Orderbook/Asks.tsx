import React from 'react';
import { topValues } from '../../utils/topValues';
import PriceSizeTotal from './PriceSizeTotal';
import { useOrderbookContext } from './OrderbookContext';

type Props = {
  aboveMobile: boolean;
};

const Asks: React.FC<Props> = ({ aboveMobile }) => {
  const { asksValuesForDisplay } = useOrderbookContext();
  const values = topValues(asksValuesForDisplay);

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

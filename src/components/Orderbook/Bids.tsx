import React from 'react';
import { sortByPriceHighFirst } from '../../utils/sort/sortByPrice';
import { formatNumber } from '../../utils/formatNumber';

type Props = {
  values: SizePrice[];
};

const Bids: React.FC<Props> = ({ values }) => (
  <div>
    {values.sort(sortByPriceHighFirst).map(([price, size]) => (
      <div>
        {formatNumber(price)}: {formatNumber(size)}
      </div>
    ))}
  </div>
);

export default Bids;

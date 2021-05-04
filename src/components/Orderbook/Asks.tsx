import React from 'react';
import { sortByPriceLowFirst } from '../../utils/sort/sortByPrice';
import { formatNumber } from '../../utils/formatNumber';

type Props = {
  values: SizePrice[];
};

const Asks: React.FC<Props> = ({ values }) => (
  <div>
    {values.sort(sortByPriceLowFirst).map(([price, size]) => (
      <div>
        {formatNumber(price)}: {formatNumber(size)}
      </div>
    ))}
  </div>
);

export default Asks;

import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TooltipIndicator from '../TooltipIndicator';
import { formatNumber } from '../../utils/formatNumber';
import { useOrderbookContext } from './OrderbookContext';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Group = styled.div`
  min-width: ${({ theme }) => theme.sizes.xxxxxxlarge}; /* Handle 4 digits */
  text-align: right;
`;

const groupIntervals = [0.5, 1, 2.5, 5, 10, 25, 50, 100, 250, 500, 1000, 2500];

const GroupAdjuster: React.FC = () => {
  const { groupInterval, setGroup } = useOrderbookContext();

  const decrementGroup = () => {
    const currentIndex = groupIntervals.indexOf(groupInterval);
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setGroup(groupIntervals[newIndex]);
    }
  };
  const incrementGroup = () => {
    const currentIndex = groupIntervals.indexOf(groupInterval);
    const newIndex = currentIndex + 1;
    if (newIndex < groupIntervals.length) {
      setGroup(groupIntervals[newIndex]);
    }
  };

  return (
    <Wrapper>
      <Group>
        <Tooltip title="The Spread at which the orderbook will group orders together.">
          <TooltipIndicator>
            Group: {formatNumber(groupInterval)}
          </TooltipIndicator>
        </Tooltip>
      </Group>
      <IconButton
        aria-label="Reduce the grouping"
        color="primary"
        disabled={groupInterval === groupIntervals[0]}
        onClick={decrementGroup}
      >
        −
      </IconButton>
      <IconButton
        aria-label="Increase the grouping"
        color="primary"
        disabled={groupInterval === groupIntervals[groupIntervals.length - 1]}
        onClick={incrementGroup}
      >
        +
      </IconButton>
    </Wrapper>
  );
};

export default GroupAdjuster;

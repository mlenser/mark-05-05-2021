import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TooltipIndicator from '../TooltipIndicator';
import { formatNumber } from '../../utils/formatNumber';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Group = styled.div`
  min-width: ${({ theme }) => theme.sizes.xxxxlarge}; /* Handle 4 digits */
  text-align: right;
`;

const grouping = [0.5, 1, 2.5, 5, 10, 25, 50, 100, 250, 500, 1000, 2500];

type Props = {
  group: number;
  setGroup: (value: number) => void;
};

const GroupAdjuster: React.FC<Props> = ({ group, setGroup }) => {
  const decrementGroup = () => {
    const currentIndex = grouping.indexOf(group);
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setGroup(grouping[newIndex]);
    }
  };
  const incrementGroup = () => {
    const currentIndex = grouping.indexOf(group);
    const newIndex = currentIndex + 1;
    if (newIndex < grouping.length) {
      setGroup(grouping[newIndex]);
    }
  };

  return (
    <Wrapper>
      <Group>
        <Tooltip title="The Spread at which the orderbook will group orders together.">
          <TooltipIndicator>Group: {formatNumber(group)}</TooltipIndicator>
        </Tooltip>
      </Group>
      <IconButton
        aria-label="Reduce the grouping"
        color="primary"
        disabled={group === grouping[0]}
        onClick={decrementGroup}
      >
        −
      </IconButton>
      <IconButton
        aria-label="Increase the grouping"
        color="primary"
        disabled={group === grouping[grouping.length - 1]}
        onClick={incrementGroup}
      >
        +
      </IconButton>
    </Wrapper>
  );
};

export default GroupAdjuster;

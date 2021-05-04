import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const StyledFab = styled(Fab)`
  bottom: 1rem;
  position: fixed;
  right: 1rem;
`;

const ScrollTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#top');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div role="presentation" onClick={handleClick}>
        <StyledFab aria-label="scroll back to top" size="small">
          <ArrowUpwardIcon />
        </StyledFab>
      </div>
    </Zoom>
  );
};

export default ScrollTop;

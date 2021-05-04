import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const LinkBase = css`
  color: ${({ theme }) => theme.palette.primary[500]};
  cursor: pointer;
  text-decoration-color: ${({ theme }) =>
    theme.palette.primary['500transparent']};

  :hover {
    color: ${({ theme }) => theme.palette.primary.A400};
  }
`;

export const StyledA = styled.a`
  ${LinkBase};
`;

export const StyledLink = styled(GatsbyLink)`
  ${LinkBase};
`;

type Props = {
  children: React.ReactNode;
  href?: string;
  to?: string;
};

const Link: React.FC<Props> = ({ children, href, to, ...rest }) => {
  if (to) {
    return (
      <StyledLink to={to} {...rest}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledA href={href} {...rest}>
      {children}
    </StyledA>
  );
};

export default Link;

import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import PageWrapper from './PageWrapper';

const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.textColor};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

type Props = {
  children: React.ReactNode;
  location?: {
    pathname: string;
  };
};

const LazyScrollTop = loadable(() => import('./ScrollTop'));

const Layout: React.FC<Props> = ({ children }) => (
  <AppWrapper>
    <PageWrapper>
      <div id="top" />
      <main>
        {children}
        <LazyScrollTop />
      </main>
    </PageWrapper>
  </AppWrapper>
);

export default Layout;

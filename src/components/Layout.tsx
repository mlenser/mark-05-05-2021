import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import PageWrapper from './PageWrapper';
import ThemeProvider from './ThemeProvider';

const AppWrapper = styled.div`
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
    <ThemeProvider>
      <PageWrapper>
        <div id="top" />
        <main>
          {children}
          <LazyScrollTop />
        </main>
      </PageWrapper>
    </ThemeProvider>
  </AppWrapper>
);

export default Layout;

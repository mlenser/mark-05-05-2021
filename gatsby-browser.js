import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <>{element}</>
  </ThemeProvider>
);

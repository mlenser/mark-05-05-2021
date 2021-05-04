import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { DefaultTheme } from './DefaultTheme';

const breakpoints = {
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  mobileS: 0, // 0-359, but 320 is "min".
  // mobileS is the default styling and should not be used as a query
  mobileM: 360, // 360-479
  mobileL: 480, // 480-767
  tablet: 768, // 768-1023
  laptop: 1024, // 1024-1199
  desktop: 1200, // 1200-1439
  desktopLarge: 1440, // 1440+
  /* eslint-enable sort-keys-fix/sort-keys-fix */
};

const createBreakpoint = (width: number): string => `(min-width: ${width}px)`;
const createMaxBreakpoint = (width: number): string =>
  `(max-width: ${width}px)`;

const theme: DefaultTheme = {
  device: {
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    mobileS: createBreakpoint(breakpoints.mobileS),
    mobileM: createBreakpoint(breakpoints.mobileM),
    mobileL: createBreakpoint(breakpoints.mobileL),
    tablet: createBreakpoint(breakpoints.tablet),
    laptop: createBreakpoint(breakpoints.laptop),
    desktop: createBreakpoint(breakpoints.desktop),
    /* eslint-enable sort-keys-fix/sort-keys-fix */
  },
  palette: {
    asksColor: 'rgb(241 79 76)',
    background: 'rgb(27 42 49)',
    bidsColor: 'rgb(36 172 124)',
    blue: {
      ...blue,
      main: blue[500],
    },
    error: {
      ...red,
      main: red[500],
    },
    primary: {
      ...blue,
      main: blue[500],
    },
    textColor: 'rgb(255, 255, 255, 0.87)',
  },
  sizes: {
    xxxsmall: '0.25rem', // 4px
    xxsmall: '0.5rem', // 8px
    xsmall: '0.625rem', // 10px
    small: '0.75rem', // 12px
    medium: '1rem', // 16px
    large: '1.25rem', // 20px
    xlarge: '1.5rem', // 24px
    xxlarge: '2rem', // 32px
    xxxlarge: '2.5rem', // 40px
    xxxxlarge: '3rem', // 48px
    xxxxxlarge: '4rem', // 64px
    xxxxxxlarge: '5rem', // 80px
  },
  widths: {
    xxxxxxxsmall: '5rem', // 80px
    xxxxxxsmall: '7.5rem', // 120px
    xxxxxsmall: '10rem', // 160px
    xxxxsmall: '15rem', // 240px
    xxxsmall: '20rem', // 320px
    xxsmall: '25rem', // 400px
    xsmall: '30rem', // 480px
    small: '35rem', // 560px
    medium: '40rem', // 640px
    large: '45rem', // 720px
    xlarge: '50rem', // 800px
    xxlarge: '55rem', // 880px
    xxxlarge: '60rem', // 960px
  },
};

export default theme;

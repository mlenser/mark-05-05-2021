import theme from './theme';

const muiTheme = {
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  palette: {
    contrastThreshold: 3, // Maximize the contrast between the background and the text.
    error: theme.palette.error,
    primary: theme.palette.primary,
    tonalOffset: 0.2,
    type: 'dark',
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    useNextVariants: true,
  },
};

export default muiTheme;

import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F1F2F4',
      main: '#2D2447',
      dark: '#1A0B28'
    },
    secondary: {
      light: '#F8FCBC',
      main: '#FF8484',
      dark: '#0D0628'
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // '@font-face': [Quicksand],
      },
    },
  },
});

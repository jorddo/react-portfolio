import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#4a4a4a',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

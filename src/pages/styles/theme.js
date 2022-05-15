import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffcc80',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

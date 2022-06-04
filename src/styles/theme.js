import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#121212',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    background: {
      default: '#a1a1a1',
    },
  },
  paperContainer: {
    height: 1350,
    backgroundImage: `url(${'../assets/landingbg.jpg'})`,
  },
});

theme = responsiveFontSizes(theme);

export default theme;

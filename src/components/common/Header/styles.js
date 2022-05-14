import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const StyledHeader = styled(AppBar)`
  .MuiSvgIcon-root {
    margin-right: 1rem;
  }

  .header-title {
    margin-right: 2rem;
    font-family: monospace;
    font-weight: 700px;
    letter-spacing: 0.3rem;
    color: inherit;
    text-decoration: none;
  }

  .hamburger {
    flex-grow: 1;
    justify-content: flex-end;
    display: flex;

    @media screen and (min-width: 899px) {
      display: none;
    }
  }

  .nav-links {
    flex-grow: 1;
    justify-content: flex-end;
    display: none;

    @media screen and (min-width: 899px) {
      display: flex;
    }
  }
`;

export default StyledHeader;

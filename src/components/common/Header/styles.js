import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const StyledHeader = styled(AppBar)`
  .MuiSvgIcon-root {
    display: none;
    margin-right: 1rem;

    @media screen and (min-width: 899px) {
      display: flex;
    }
  }
`;

export default StyledHeader;

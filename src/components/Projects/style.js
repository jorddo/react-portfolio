import { styled } from '@mui/material';
import { Container } from '@mui/material';

const StyledProjects = styled(Container)`
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export default StyledProjects;

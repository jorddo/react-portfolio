import { styled } from '@mui/system';

const StyledResume = styled('div')`
  padding: 1rem;
  embed {
    height: auto;
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    embed {
      height: 57rem;
      width: 42rem;
    }
  }
`;

export default StyledResume;

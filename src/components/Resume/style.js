import { styled } from '@mui/system';

const StyledResume = styled('div')`
  embed {
    height: 38rem;
    width: 26rem;
  }

  @media screen and (min-width: 800px) {
    embed {
      height: 57rem;
      width: 42rem;
    }
  }
`;

export default StyledResume;

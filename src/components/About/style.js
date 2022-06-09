import { styled } from '@mui/system';
import { Container } from '@mui/material';

const StyledAbout = styled(Container)`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  align-items: center;

  .about-content {
    max-width: 50rem;
    margin: auto;
  }

  img {
    max-width: 18rem;
    border-radius: 50%;
    margin-top: 2rem;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    img {
      max-width: 20rem;
    }
  }
`;

export default StyledAbout;

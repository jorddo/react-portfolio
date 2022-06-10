import { styled } from '@mui/system';
import { Container } from '@mui/material';

const StyledAbout = styled(Container)`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  align-items: center;

  .about-content {
    padding-top: 2rem;
    max-width: 90%;
    margin: auto;
    font-size: 1.1rem;
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

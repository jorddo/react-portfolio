import { styled } from '@mui/system';
import Image from '../../assets/hero-bg.jpg';

const StyledHero = styled('div')`
  background-image: url('${Image}');
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export default StyledHero;

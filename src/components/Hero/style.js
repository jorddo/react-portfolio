import { styled } from '@mui/system';
import Image from '../../assets/hero-bg.jpg';

const StyledHero = styled('div')`
  /* background-image: url('${Image}');
  background-size: cover; */
  background-color: #e2e2e2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23808080' fill-opacity='0.12'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6 12h6v6h-6v-6zm24 24h6v6h-6v-6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export default StyledHero;

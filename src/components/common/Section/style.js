import { styled } from '@mui/material/styles';

const StyledSection = styled('div')(({ pattern }) => ({
  background: pattern ? `url("${pattern}") #cacaca` : '#eee',
  padding: '4rem 0',
}));

export default StyledSection;

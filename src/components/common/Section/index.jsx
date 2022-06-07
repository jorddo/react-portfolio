import StyledSection from './style';

const Section = ({ children, ...rest }) => (
  <StyledSection {...rest}>{children}</StyledSection>
);

export default Section;

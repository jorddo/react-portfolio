import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
// import Link from '../Link';
import StyledHeader from './styles';

const pages = [
  { label: 'Home', path: '#hero' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Resume', path: '#resume' },
  { label: 'Contact', path: '#contact' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // console.log(anchorElNav);

  // useEffect(() => {
  //   document.title = pages.label;
  // }, [anchorElNav]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleClick = (section) => {
    // handleCloseNavMenu();
    document.querySelector(section).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <StyledHeader position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#hero'
            className='header-title'
          >
            <CelebrationIcon />
            JS
          </Typography>
          {/* Mobile Hamburger Menu */}
          <Box className='hamburger'>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handleClick(page.path)}
                >
                  <Button sx={{ textAlign: 'center' }}>
                    <Typography variant='body1' component='p'>
                      {page.label}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop Links */}
          <Box className='nav-links'>
            {pages.map((page) => (
              <Button
                variant='contained'
                disableElevation
                key={page.label}
                onClick={() => handleClick(page.path)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  margin: '.3rem',
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledHeader>
  );
};
export default Header;

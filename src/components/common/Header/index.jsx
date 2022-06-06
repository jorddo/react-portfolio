import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Link from '../Link';
import StyledHeader from './styles';

const pages = [
  { label: 'Home', path: 'react-portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledHeader position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='react-portfolio'
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.path} sx={{ textAlign: 'center' }}>
                    <Typography variant='body1' component='p'>
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop Links */}
          <Box className='nav-links'>
            {pages.map((page) => (
              <Link
                key={page.label}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', margin: '1rem' }}
              >
                {page.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledHeader>
  );
};
export default Header;
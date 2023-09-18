import React from "react";
import {AppBar,Toolbar,IconButton,Typography,Stack,Button,Container,Box} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { CatchingPokemon } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../StyleModule/layout.css";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1}}>MyApp</Typography>
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/about">
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/">
              <Button color="inherit">Services</Button>
            </Link>
            <Link to="/">
              <Button color="inherit">Pricing</Button>
            </Link>
            <Link to="/">
              <Button color="inherit">Blog</Button>
            </Link>
          </Stack>
          {/* for menu icon */}
          <IconButton size="large"  edge="start"  color="inherit"  aria-label="menu"  sx={{ mr: 2 ,display: { xs: "block", md: "none" }}}          
            onClick={handleOpenNavMenu}
          >
             <MenuIcon />
          </IconButton>
          {/* box for menu list */}
          <Box>
          <Menu id="menu-appbar"  anchorEl={anchorElNav}  anchorOrigin={{  vertical: "bottom",  horizontal: "left"  }} keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{display: { xs: "block", md: "none" }
            }}           
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="left" component="div">
                <Stack direction="column" spacing={2}>
                  <Link to="/about">
                    <Button color="primary">About</Button>
                  </Link>
                  <Link to="/">
                    <Button color="primary">Services</Button>
                  </Link>
                  <Link to="/">
                    <Button color="primary">Pricing</Button>
                  </Link>
                  <Link to="/">
                    <Button color="primary">Blog</Button>
                  </Link>
                </Stack>
              </Typography>
            </MenuItem>
          </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

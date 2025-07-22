"use client";

import * as React from 'react';
import Link from 'next/link';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Brand from './brand';


const navItems = [
  {icon: <HomeIcon />, item: 'Home', link: '/'},
  {icon: <ConstructionIcon />, item: 'Projects', link: '/project'},
  {icon: <MenuBookIcon />, item: 'Readings', link: '/readings'}
];

export const ResponsiveAppBar = () => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 3 }}>
      <Toolbar />
      <List>
        {navItems.map(({ icon, item, link }) => (
          <ListItem key={ item } disablePadding>
            <Link href={ link }>
              <ListItemButton sx={{ textAlign: 'center' }}>
                {icon && <Box sx={{ mr: 1 }}>{icon}</Box>}
                <ListItemText primary={item} sx={{fontSize: "1.2rem", fontWeight: "500" }}/>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="fixed" sx= {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, margin: 0 }}>
            <Box sx={{ display: 'flex' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={ handleDrawerToggle }
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              <Brand />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              {navItems.map(({item, link}) => (
                <Link key={item} href={link} passHref>
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default ResponsiveAppBar;

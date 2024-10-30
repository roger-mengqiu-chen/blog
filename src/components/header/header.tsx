"use client";

import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '@/components/header/logo';
import Brand from './brand';


const navItems = [
  {item: 'Home', link: '/'},
  {item: 'About', link: '/about'},
  {item: 'Projects', link: '/projects'},
  {item: 'Readings', link: '/readings'}
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
        {navItems.map(({ item, link }) => (
          <ListItem key={ item } disablePadding>
            <Link href={ link }>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

					<Box 
            sx={{ 
              display: { xs: 'flex', sm: 'block' }, 
              justifyContent: 'flex-end', 
              alignItems: 'center' }}>
						<Logo />
					</Box>
          <Brand />
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({item, link}) => (
              <Link key={item} href={link} passHref>
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              </Link>
            ))}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default ResponsiveAppBar;

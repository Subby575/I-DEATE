"use client"
import * as React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Content from './_components/Content';
import Header from './_components/Header';
import { MessageSquareDot, ReceiptText, User } from 'lucide-react';
import Contract from './_components/Contract';
import { Lightbulb } from 'lucide-react';
import { usePathname } from 'next/navigation';

const drawerWidth = 280;
const menu=[
  {
      name:'Profile',
      icon:User,
      link:'/Founder/Profile'

  },
  {
      name:'Ideas',
      icon:Lightbulb ,
      link:'/Founder/Profile/Ideas'

  },
  {
      name:'Directs',
      icon:MessageSquareDot ,
      link:'/Founder/Profile/Approach'

  },
  {
      name:'Contracts',
      icon:ReceiptText,
      link:'/Founder/Profile/Contracts'

  },

]

function Layout({props,children}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const path=usePathname();


  const drawer = (

    <div className='bg-black h-screen'>
      <div>
        <Image src='/Logo/logo-trans.png' width={400} height={400} className='w-40 mx-auto' alt='logo' />
      </div>
      <Divider />
      <List className='my-4'>
        {menu.map((text, index) => (
            <a key={index} href={text.link}>

            
          <ListItem className={` ${text.link==path?"bg-gray-100":""}  my-4 rounded-lg `} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <text.icon className={`${text.link==path?"text-gray-900":"text-neutral-100"} `} />
              </ListItemIcon>
              <ListItemText className={`${text.link==path?"text-gray-900":"text-neutral-100"} `} primary={text.name} />
            </ListItemButton>
          </ListItem>
          </a>
        ))}
      </List>
      <Divider />

    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='bg-white'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            className='text-black'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
            {/* <MenuIcon /> */}
          </IconButton>
              <Header/>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          {children}
      </Box>
    </Box>
  );
}

export default Layout;


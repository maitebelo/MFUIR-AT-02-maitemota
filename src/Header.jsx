import React, { useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Link, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <header>
      <AppBar position="static" sx={{ backgroundImage: `url('/path/to/your/image')`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundColor: '#394263' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            TravelConnect
          </Typography>
          <AccountCircleIcon color="inherit" style={{ marginRight: '10', }}> </AccountCircleIcon>
          <NotificationsIcon color="inherit" style={{ marginRight: '10', }}></NotificationsIcon>
          <MessageIcon color="inherit"></MessageIcon>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#" sx={{ py: 1 }}>
                <Box sx={{ flexGrow: 1 }}>Início</Box>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#" sx={{ py: 1 }}>
                <Box sx={{ flexGrow: 1 }}>Perfil</Box>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#" sx={{ py: 1 }}>
                <Box sx={{ flexGrow: 1 }}>Amigos</Box>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#" sx={{ py: 1 }}>
                <Box sx={{ flexGrow: 1 }}>Configurações</Box>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="#" sx={{ py: 1 }}>
                <Box sx={{ flexGrow: 1 }}>Sair</Box>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header >
  );
}

export default Header;

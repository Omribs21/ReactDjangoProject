import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectToken } from '../Slicers/loginSlice';
import { doSignOutAsync, selectTokenLogOut } from '../Slicers/logoutSlice';
import { Link } from 'react-router-dom';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const LogOutToken = useSelector(selectTokenLogOut)
  const userName = useSelector(selectUserName)
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Return the user to the main page after log out.
  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    if (LogOutToken === '') {
      refreshPage()
    } 
  }, [LogOutToken])


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>Me</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem style={{ fontSize: "15px", textAlign: "center" }}>
          <Avatar /> {userName}
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="large" />
          </ListItemIcon >
          <Link style={{ fontSize: "15px" }} to="myprofile">My Profile</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="large" />
          </ListItemIcon>
          <button style={{ fontSize: "20px", border: "none", backgroundColor: "white" }} onClick={() => {
            dispatch(doSignOutAsync({ "token": token }));
          }}>Logout</button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

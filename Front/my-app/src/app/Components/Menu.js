import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate,useNavigate } from 'react-router-dom';
import { doSignOutAsync } from '../Slicers/logoutSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import {selectToken} from '../Slicers/loginSlice';


export default function SwipeableTemporaryDrawer() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken)
  const navigate = useNavigate();

  

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{fontSize:"30px"}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' :180 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home','Shirts', 'Pants', 'Under shirt', 'Shoes','Long Sleeve shirts','Long Sleeve pants'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText ><Link to="/products"><span style={{textAlign:"center",fontSize:"15px",color:"black"}} >{text}</span></Link></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Login', 'Register','Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{textAlign:"center"}}>
                {text === "Login" && token ==="" ? <Link to="/login" style={{color:"black", fontSize:"20px"}}>Login<LoginIcon style={{color:"black", fontSize:"20px"}}/> </Link>:null}
                {text === "Register" && token ==="" ? <Link to="/register" style={{color:"black", fontSize:"20px"}}>Register<HowToRegIcon style={{color:"black", fontSize:"20px"}}/></Link>:null}
                
                {text ==="Logout" && token != "" ? <button style={{fontSize:"20px",border:"none",backgroundColor:"white"}} onClick={()=> {dispatch(doSignOutAsync({"token":token}))}}>Logout <LogoutIcon/></button>:null}
                
            </ListItemButton>
          
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color:"white", fontSize:"medium"}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux'
import { GetWishlistAsync } from '../Slicers/getWishlistSlice'
import { selectproductswishlist } from '../Slicers/getWishlistSlice'
import { selectToken } from '../Slicers/loginSlice'
import { GetAllProductsAsync, selectAllprods } from '../Slicers/GetAllProductsSlice'
import { RemoveFromWishlistAsync } from '../Slicers/RemoveFromWishlistSlice';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteItem, selectCartItems, selecttotalQuantity, selecttotalAmount, cleanCart } from '../Slicers/CartSlice';

export default function MyCartDrawer() {
    const [state, setState] = React.useState({
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


    const token = useSelector(selectToken)
    const totalQuantity = useSelector(selecttotalQuantity)
    const totalAmount = useSelector(selecttotalAmount)
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{ backgroundColor: "#DDDDDD" }}
        >

        </Box>
    );

    const notify = () => {
        toast.info('Log in first', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <div>

            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style={{ color: "white" }} onClick={toggleDrawer(anchor, true)}>
                        <lord-icon
                            src="https://cdn.lordicon.com/medpcfcy.json"
                            trigger="hover"
                            colors="primary:#ffffff">
                        </lord-icon>
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                        <h1 style={{ textAlign: "center" }}>My Cart</h1>
                        <hr></hr>
                        <div>
                            {cartItems.map((prod) =>
                                <div class="animate__animated animate__backInRight">
                                    <div style={{ textAlign: "center", fontSize: "20px" }}>
                                        <p style={{ fontSize: "15px" }}>Product name:{prod.desc} | Price:{prod.price}</p>
                                        <p style={{ fontSize: "15px" }}>Quantity:{prod.quantity} | Number: {prod.number} | Size:{prod.size}</p>
                                        Total:{prod.total}₪<br></br>
                                        <button style={{ marginTop: "0%", height: "40%", width: "80%", fontSize: "15px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px", justifyContent: "center" }} onClick={() => dispatch(deleteItem(prod.id))}>Remove item</button>
                                        <hr></hr>
                                    </div>



                                </div>
                            )}

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                {cartItems.length >= 1 ? <button style={{ marginTop: "0%", height: "40%", width: "80%", fontSize: "15px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px" }} onClick={() => dispatch(cleanCart())}>Clean Cart</button> : null}

                            </div>

                            
                        </div>
                        <div style={{ fontWeight: "bold", marginTop: "45%" }} >
                            <p style={{ textAlign: "left" }}>Cart Total:<span style={{ marginLeft: "50%" }} >{totalAmount}₪</span></p>
                        </div>
                        <div>
                            {token != '' ? <Link to="/final_buy"><button style={{ width:"100%", height: "100%", fontSize: "15px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px" }}>Final buy</button></Link> : <button style={{ width:"100%", fontSize: "15px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px" }} onClick={notify}>Buy</button>}
                        </div>
                        

                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

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
import { selectUserName, selectUserId } from '../Slicers/loginSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CleanWishlistAsync } from '../Slicers/CleanWishlistSlice';

export default function WishlistDrawer() {
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

    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const Wishlistproducts = useSelector(selectproductswishlist)
    const allProds = useSelector(selectAllprods)
    const username = useSelector(selectUserName)
    const userId = useSelector(selectUserId)

    useEffect(() => {
        GetWishlistAsync({ "Token": token });
        console.log(Wishlistproducts)
        GetAllProductsAsync();
        console.log(allProds)
    }, [token.length])

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
    const GetWishlistprods = () => {
        GetWishlistAsync({ "Token": token });
    }
    const NotifyRemove = () => {
        toast('Item removed.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }

    const clean = () => {
        dispatch(CleanWishlistAsync({ "Token": token, "userID": userId }));
    }
    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style={{ color: "white" }} onClick={toggleDrawer(anchor, true)}><lord-icon
                        src="https://cdn.lordicon.com/pnhskdva.json"
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
                        <div>
                            <div key={1}>
                                <button class="animate__animated animate__backInDown" style={{ marginTop: "5%", marginBottom: "5%", width: "100%", fontSize: "20px", color: "white", backgroundColor: "dodgerblue" }} onClick={() => { dispatch(GetWishlistAsync({ "Token": token })) }}>Show My Wishlist</button>
                                <p class="animate__animated animate__backInDown" style={{ textAlign: "center", fontSize: "20px" }}>Total items:{Wishlistproducts.length}</p>
                                <Divider />
                                {console.log(userId)}
                                <div key={2}>
                                    {Wishlistproducts.length > 0 ? Wishlistproducts.map((prod) =>
                                        <div class="animate__animated animate__backInUp" style={{ textAlign: "center", fontSize: "20px", marginTop: "5%" }}>
                                            Product: {allProds[prod.prod_id].desc} <br></br>
                                            Price: {allProds[prod.prod_id].price}
                                            <div key={3} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                                <button class="animate__animated animate__backInUp" onClick={() => {NotifyRemove(); dispatch(RemoveFromWishlistAsync({ "Token": token, "prod_id": prod.prod_id, "userID": userId })); }}
                                                 style={{ marginTop: "5%", height: "40%", width: "60%", fontSize: "10px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px", justifyContent: "center" }}>
                                                    <p style={{ color: "white", marginBottom: "0%", fontSize: "15px" }}>Remove item</p>
                                                 

                                                </button>

                                            </div>

                                            <Divider></Divider>

                                        </div>)
                                        : null}
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                        <button class="animate__animated animate__backInUp" style={{ marginTop: "5%", width: "40%", fontSize: "15px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px" }} onClick={() => dispatch(GetWishlistAsync({ "Token": token }))}> Refresh </button>
                                    </div>
                                </div>
                                {Wishlistproducts.length > 0 ?
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                        <button class="animate__animated animate__backInUp" style={{ marginRight: "5%", marginLeft: "5%", marginTop: "60%", width: "100%", fontSize: "15px", color: "white", backgroundColor: "dodgerblue", borderRadius: "10px", justifyContent: "center" }} onClick={() => { clean(); }}>

                                            <div>
                                                <p style={{ color: "white", display: "inline", fontSize: "20px" }}>clean my wishlist</p>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gsqxdxog.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff,secondary:#ffffff"
                                                    style={{ width: "30px", height: "30px" }}>
                                                </lord-icon>
                                            </div>
                                        </button>


                                    </div>

                                    : null}

                            </div>
                        </div>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

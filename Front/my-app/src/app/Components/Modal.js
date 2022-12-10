import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import GiannisUndershirt from "../images/GiannisUndershirt.jpeg"
import { useSelector } from 'react-redux';
import { selectAllprods } from '../Slicers/GetAllProductsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { size } from '../Slicers/GetProdFromWishlistSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogsModal() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [Quantitycount, setQuantitycount] = useState(0)
    const [Size, setSize] = useState("")
    const [myCart, setmyCart] = useState([]);
    const ALLPRODUCTS = useSelector(selectAllprods)
    const [amountCng, setamountCng] = useState(0);

    useEffect(() => {
        setmyCart(JSON.parse(localStorage.getItem("myCart")));
    }, []);

    //run every change in the length of myCart
    useEffect(() => {
        console.table(myCart)
        localStorage.setItem("myCart", JSON.stringify(myCart));
    }, [myCart.length,amountCng]);

    const addToCart = (item) => {
        let temp = myCart.find((x) => x._id === item._id);
        if (size != ""  && Quantitycount > 0) {
            if (temp) {
                console.log(temp);
                if (temp.desc == item.desc && temp.size == size) {
                    temp.amount += item.amount;
                    setmyCart(myCart);
                }

            } else {
                setmyCart([...myCart, item]);
                localStorage.setItem("myCart", JSON.stringify(myCart));
                // dispatch(sendCart(myCart));
            }
            console.table(myCart);
            setmyCart([...myCart, item]);
            localStorage.setItem("myCart", JSON.stringify(myCart));
            // dispatch(sendCart(myCart));
        }

    };
    const notifyAddToCart = () => {
        if (Quantitycount < 1) {
            toast.error('Choose Quantity!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (Size == '') {
            toast.error('Choose Size!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.success('Item added to Cart', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });

        }
    }

    const FinalAddToCart = () => {
        addToCart({
            _id: 1,
            desc: "giaanis",
            amount: Number(Quantitycount),
            price: 140,
            size: Size,
            total: Number(Quantitycount) * 140,
        });
        notifyAddToCart();
    }
    return (
        <div>
            <Button onClick={handleClickOpen}>
                <img src={GiannisUndershirt} className="img-responsive" style={{ width: "70%", margin: "auto" }} alt="nice" />
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <BootstrapDialogTitle style={{ backgroundColor: "#AAAAAA" }} id="customized-dialog-title" onClose={handleClose}>
                    <p style={{ textAlign: "center", fontSize: "20px" }}>GiannisUndershirt</p>
                    <p style={{ textAlign: "center", fontSize: "20px" }}>Price: 150</p>

                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <Typography gutterBottom>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div>
                                    <p style={{ fontSize: "20px" }}>Quantity:</p>
                                    <input style={{ width: "45%", margin: "auto", blockSize: "30px", fontSize: "15px" }} type={"number"} min={1} max={10} value={Number(Quantitycount)} onChange={(e) => setQuantitycount(e.target.value)} />
                                </div>
                                <div style={{ padding: "10px" }}>
                                    <form>
                                        <input type="radio" id="small" name="check" value="S" onChange={(e) => setSize(e.target.value)} />
                                        <label style={{ fontSize: "20px" }} htmlfor="small">Small</label><br></br>
                                        <input type="radio" id="medium" name="check" value="M" onChange={(e) => setSize(e.target.value)} />
                                        <label style={{ fontSize: "20px" }} htmlfor="medium">Medium</label><br></br>
                                        <input type="radio" id="large" name="check" value="L" onChange={(e) => setSize(e.target.value)} />
                                        <label style={{ fontSize: "20px" }} htmlfor="large">Large</label><br></br>
                                        <input type="radio" id="xlarge" name="check" value="XL" onChange={(e) => setSize(e.target.value)} />
                                        <label style={{ fontSize: "20px" }} htmlfor="xlarge">X-Large</label><br></br>
                                        <input type="radio" id="xxlarge" name="check" value="XXL" onChange={(e) => setSize(e.target.value)} />
                                        <label style={{ fontSize: "20px" }} htmlfor="xxlarge">XX-Large</label>{" "}
                                    </form>
                                </div>
                            </div>
                            <p style={{ fontSize: "20px" }}>
                                Order details:

                                Total Amount:{Quantitycount} <br></br>

                                Size:{Size}
                            </p>
                        </Typography>
                        <Typography gutterBottom>
                            <img src={GiannisUndershirt} className="img-responsive" style={{ width: "70%", margin: "auto" }} alt="nice" />
                        </Typography>
                    </div>
                    <p style={{ fontSize: "15px" }}>Product desc:
                        Giaanis under shirt
                    </p>
                </DialogContent>

                <Button onClick={() => {FinalAddToCart()}}
                 style={{ fontSize: "large" }} >
                    {/* onClick={handleClose} */}
                    Add to cart
                </Button>

            </BootstrapDialog>
        </div>
    );
}

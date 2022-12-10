import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomizedDialogs from './TermsOfService';
import ContactUs from './ContactUs';
import ReturnPolicy from './ReturnPolicy';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstName, selectLastName, selectToken, selectEmail } from '../Slicers/loginSlice';
import { selecttotalAmount, selectCartItems } from '../Slicers/CartSlice';
import { addOrderAsync } from '../Slicers/FinalBuySlice';

const FinalBuy = () => {
  const dispatch = useDispatch();
  const [City, setCity] = useState("");
  const [district, setdistrict] = useState("")
  const [phone_number, setphone_number] = useState("")
  const [postal_code, setpostal_code] = useState("")
  const CartItems = useSelector(selectCartItems)
  const total_amount = useSelector(selecttotalAmount)
  const token = useSelector(selectToken)
  const Email = useSelector(selectEmail)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  const [first_name, setFirstName] = useState(firstName);
  const [last_name, setLastName] = useState(lastName);
  const [email, setEmail] = useState(Email);

  const notify = () => {
    if (first_name === '') {
      toast.error('Please fill the first Name field.', {
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
    else if (last_name === "") {
      toast.error('Please fill the last name field.', {
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
    else if (district === '') {
      toast.error('Please fill the username field.', {
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
    else if (City === '') {
      toast.error('Please fill the password field.', {
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
    else if (email === '') {
      toast.error('Please fill the email field.', {
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
    else {
      toast.success('Welcome!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  // const FinalRegister = () => {
  //     if (username !== '' && password !== '' && email !== '' & first_name !== '' && last_name !== '') {
  //         dispatch(RegisterAsync({ "username": username, "password": password, "email": email, "first_name": first_name, "last_name": last_name}))
  //     }
  // }

  const final_buy = () => {
    dispatch(addOrderAsync({
      "Token": token,
      "cartItems": {CartItems},
      "city": City,
      "district": district,
      "phone": phone_number,
      "postalCode": postal_code,
      "total": Number({total_amount})
    }))
  }


  return (
    <div style={{ zIndex: "1" }} class="header">
      <div style={{ height: "75px" }} class="inner-header flex">
        <div style={{ width: "600px", height: "550px", backgroundColor: "gainsboro", margin: "auto", marginTop: "2.5%", padding: "20px", borderRadius: "25px" }}>
          <h1 class="animate__animated animate__zoomIn" style={{ width: "100%", fontSize: "70px", color: "black", fontFamily: "monospace" }}>Order</h1>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", rowGap: "15px" }}>
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='First name' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='Last name' value={last_name} onChange={(e) => setLastName(e.target.value)} />
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='City' value={City} onChange={(e) => setCity(e.target.value)} />
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='District' value={district} onChange={(e) => setdistrict(e.target.value)} />
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", margin: "auto", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='Phone Number' value={phone_number} onChange={(e) => setphone_number(e.target.value)} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", rowGap: "15px" }}>
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='Postal Code' value={postal_code} onChange={(e) => setpostal_code(e.target.value)} />
              <input required class="animate__animated animate__zoomInDown" style={{ width: "100%", borderRadius: "10px", fontSize: "17px", color: "black", blockSize: "50px" }} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <p style={{ marginTop: "15%", textDecoration: "underline", fontWeight: "bold" }}>Payment:{total_amount}₪</p>
            </div>

            {/* <div>
              <Link to="/login"><p class="animate__animated animate__bounceInUp" style={{ fontSize: "20px" }}>Already have an account?, Click Here!</p></Link>
            </div> */}
            <Outlet />
          </div>
          <button class="animate__animated animate__zoomInDown" style={{ width: "35%", height: "17%", borderRadius: "5px", margin: "auto", marginTop: "5%", fontSize: "17px", color: "white", blockSize: "50px", backgroundColor: "dodgerblue" }} type="button"
            onClick={() => {final_buy() ; notify() }}

          >
            <p style={{ color: "white" }}>Confirm Order
              <lord-icon
                src="https://cdn.lordicon.com/egiwmiit.json"
                trigger="hover"
                colors="primary:#ffffff">
              </lord-icon>
              </p>

          </button>
        </div>
      </div>
      <div style={{ zIndex: "5" }}>
        <hr style={{ color: "white", backgroundColor: "white", height: "3px", marginTop: "60em" }}></hr>
        <CustomizedDialogs />
        <hr style={{ color: "white", backgroundColor: "white", height: "3px", marginTop: "0em" }}></hr>
        <ContactUs />
        <hr style={{ color: "white", backgroundColor: "white", height: "3px", marginTop: "0em" }}></hr>
        <ReturnPolicy />
      </div>
      <div>
        <svg class="waves" xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering={"auto"}>
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default FinalBuy
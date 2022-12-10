import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectFirstName, selectLastName, selectUserName, selectToken, selectEmail } from '../Slicers/loginSlice';
import CustomizedDialogs from './TermsOfService';
import ContactUs from './ContactUs';
import ReturnPolicy from './ReturnPolicy';
import { Link, Outlet } from 'react-router-dom';
const MyProfile = () => {
  const first_name = useSelector(selectFirstName)
  const user_name = useSelector(selectUserName)
  const last_name = useSelector(selectLastName)
  const token = useSelector(selectToken)
  const email = useSelector(selectEmail)
  const dispatch = useDispatch()


  useEffect(() => {
    if (token != '') {
      console.log("first")
    }
  }, [])

  return (
    <div class="header">
      <div style={{ height: "0px" }} class="inner-header flex">
        <div style={{ color: "black", width: "620px", height: "550px", backgroundColor: "gainsboro", margin: "auto", marginTop: "1%", padding: "20px", borderRadius: "25px" }}>
          <br></br>
          
          <h1 class="animate__animated animate__backInDown" style={{ fontSize: "50px", textAlign:"center",  color: "black", fontFamily: "monospace" }}>Welcome Back! {user_name}</h1>
          <h2 class="animate__animated animate__backInUp" style={{ fontSize: "30px", textAlign:"center",  color: "black", fontFamily: "monospace" }}>Your Personal details:</h2>
          <br></br>
          <div style={{ display: "flex", rowGap: "15px" }}>
            <div class="animate__animated animate__backInLeft" style={{textAlign:"left"}}> 
              <p>User Name: {user_name}</p>
              <p>First name: {first_name}</p>
              <p>Last Name: {last_name}</p>
              <p>Email:{email}</p>
            </div>
            <div class="animate__animated animate__backInRight" style={{marginLeft:"30px"}}>
              <p>City:</p>
              <p>District:</p>
              <p>Postal ID:</p>
              <p>Phone:</p>
            </div>

          </div>
          <h2 style={{marginTop:"15%"}}>Want to update order details? click down here!</h2>
          <Outlet />
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

export default MyProfile
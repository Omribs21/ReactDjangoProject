import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from 'react-router-dom';
import { LoginAsync, selectToken } from '../Slicers/loginSlice';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import CustomizedDialogs from './TermsOfService';
import ContactUs from './ContactUs';
import ReturnPolicy from './ReturnPolicy';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = useSelector(selectToken);
    const navigate = useNavigate();

   
    useEffect(() => {
        if (token != '') {
            navigate("/products");
        } // navigate instantly to main page after login.
    })
    return (
        <div class="header">
            <div style={{ height: "0px" }} class="inner-header flex">
                <div style={{ width: "520px", height: "400px", backgroundColor: "gainsboro", margin: "auto", marginTop: "5%", padding: "20px", borderRadius: "25px" }}>
                    <br></br>
                    {/* <div style={{width:"500px",height:"100px",border:"black"}}>This is a rectangle!</div> */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", rowGap: "15px" }}>
                        <h1 class="animate__animated animate__backInDown" style={{ fontSize: "70px", textAlign: "center", color: "black", fontFamily: "monospace" }}>Log in</h1>
                        {/* username */}
                        <input class="animate__animated animate__backInLeft" style={{ width: "45%", margin: "auto", color: "black", fontSize: "17px", blockSize: "50px", borderRadius: "10px" }} placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                        {/* password */}
                        <input class="animate__animated animate__backInRight" style={{ width: "45%", margin: "auto", color: "black", blockSize: "50px", fontSize: "17px", borderRadius: "10px" }} type={'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* class="w3-input w3-border w3-round"- make the border round */}
                        <button class="animate__animated animate__bounceInUp" style={{ width: "20%", margin: "auto", fontSize: "20px", color: "white", backgroundColor: "dodgerblue", borderRadius: "30px" }} type="button"
                            onClick={() => {
                                dispatch(LoginAsync({ "username": username, "password": password }));
                                // .then(check(token));
                            }}
                        >
                            <lord-icon
                                src="https://cdn.lordicon.com/zmkotitn.json"
                                trigger="hover"
                                colors="primary:#ffffff"
                                style={{ width: "50px", height: "30px", color: "white" }}>
                            </lord-icon>
                        </button>
                    </div>
                    <br></br><br></br>
                    <div>
                        <Link to="/register"><p class="animate__animated animate__bounceInUp" style={{ fontSize: "20px" }}>Don't have an acount?, Click Here!</p></Link>
                    </div>
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

export default Login
import React from 'react';
import './App.css';
import Navbar from './app/Components/Navbar';
import { Outlet } from "react-router-dom";
import CustomizedDialogs from './app/Components/TermsOfService';
import ContactUs from './app/Components/ContactUs';
import ReturnPolicy from './app/Components/ReturnPolicy';
import Carousel from './app/Components/Carousel';

function App() {

  return (
    <div style={{ flexDirection: "column" }} className="App" >
      <Carousel />
      <Navbar />
      <div style={{columnGap:"0px"}}>
        <div style={{order:"1"}}>  
          <Outlet  />
        </div>
        {/* <div style={{ zIndex: "5",order:"2" }}>
          <hr style={{ color: "white", backgroundColor: "white", height: "3px", marginTop: "60em" }}></hr>
          <CustomizedDialogs />
          <hr style={{ color: "white", backgroundColor: "white", height: "3px", marginTop: "0em" }}></hr>
          <ContactUs />
          <hr style={{ color: "white", backgroundColor: "white", height: "3px", marginTop: "0em" }}></hr>
          <ReturnPolicy />
        </div> */}
      </div>
    </div>


  );
}

export default App;

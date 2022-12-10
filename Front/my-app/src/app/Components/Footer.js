import React from 'react'
import ContactUs from './ContactUs'
import CustomizedDialogs from './TermsOfService'


const Footer = () => {
    return (
        <div style={{position:"fixed",bottom:0,width:"100%",height:"15%" ,zIndex:-9}}>
            <section className="">
                <footer className="text-center text-white" style={{backgroundColor: "white", marginBottom:"auto"}}>
                    <div className="container p-4 pb-0">
                        <section  className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <ContactUs/>
                            </p>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2022 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer
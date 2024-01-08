// import React, { Copmponent } from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="box">
            <header className="header">
                <nav className="Navbar">
                    <h2 class="logo">LOGO</h2>
                    <a href="/" className="Solutions">Solutions</a>
                    <a href="/" className="Consultant">Consultant</a>
                    <a href="/" className="Faq">FAQs</a>
                    <a href="/" className="contact">Contact us</a>
                    <a href="/" className="Sign-in">Sign in</a>
                    <a href="/" className="active">Create Account</a>
                </nav>
            </header>
        </div>


    )
}

export default Navbar;
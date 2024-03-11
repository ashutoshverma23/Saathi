// import React, { Copmponent } from "react";
import "./Navbar.css";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="box">
            <header className="header">
                <img src={require("./saathi-logo.png")} alt="logo" className="logo" />
                <ul className={`Navbar ${isMenuOpen ? "open" : ""}`}>
                    <li><a href="/" className="Consultant">Consultant</a></li>
                    <li><a href="/" className="Faq">FAQs</a></li>
                    <li><a href="/" className="contact">Contact us</a></li>
                    <li><a href="/" className="Sign-in">Sign in</a></li>
                    <li><a href="/" className="active">Create Account</a></li>
                </ul>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
        </div>
    );
};



export default Navbar;
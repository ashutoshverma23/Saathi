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
                <nav className={`Navbar ${isMenuOpen ? "open" : ""}`}>
                    <a href="/" className="Solutions">Solutions</a>
                    <a href="/" className="Consultant">Consultant</a>
                    <a href="/" className="Faq">FAQs</a>
                    <a href="/" className="contact">Contact us</a>
                    <div className="right-buttons">
                        <a href="/" className="Sign-in">Sign in</a>
                        <a href="/" className="active">Create Account</a>
                    </div>
                </nav>
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
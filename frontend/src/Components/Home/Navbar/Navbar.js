// import React, { Copmponent } from "react";
import "./Navbar.css";
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
                    <Link to="/"><li className="Home">Home</li></Link>
                    <li className="Faq"><Link to="/faq">FAQs</Link> </li>
                    <li className="Sign-in"><Link to="/login">LogIn</Link></li>
                    <li className="active"><Link to="/signup">Create Account</Link></ li>
                    <Link to="/reports"> <li className="contact">Results</li> </Link>
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
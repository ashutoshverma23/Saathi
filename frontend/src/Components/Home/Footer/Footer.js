import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="left-portion">
                    <h2>About Us</h2>
                    <p>We are team PCS2125-15 <br></br> Ashutosh Verma, Ananya Verma, Arpita <br></br> </p>
                </div>
                <div className="right-portion">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Phone: 123-456-7890</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="left-portion">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc id consequat ultrices, nisl nunc tincidunt nunc, id consectetur lectus nunc id lectus.</p>
                </div>
                <div className="right-portion">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Phone: 123-456-7890</li>
                        <li>Email: info@example.com</li>
                        <li>Address: 123 Main St, City, State</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

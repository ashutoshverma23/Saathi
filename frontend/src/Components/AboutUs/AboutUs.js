import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-page">
            <h1>About Us</h1>
            <div className="about-section">
                <p>
                    Our mission is to provide support and resources for individuals struggling with mental health issues.
                    We believe in promoting mental wellness through education, awareness, and accessible treatment options.
                </p>
                <p>
                    Whether you're dealing with anxiety, depression, or any other mental health challenge, know that you're not alone.
                    We're here to help you on your journey towards healing and recovery.
                </p>
            </div>
            {/* <div className="image-section">
                <img src="/team-photo.jpg" alt="Our Team" />
            </div> */}
        </div>
    );
}

export default AboutUs;

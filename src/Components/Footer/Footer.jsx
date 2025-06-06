import React from 'react';
import "./Footer.css";
import assets from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='Company Logo' />
                    <p>We provide quality services to our customers. Follow us on social media to stay updated with our latest offerings!</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt='Facebook' />
                        <img src={assets.twitter_icon} alt='Twitter' />
                        <img src={assets.linkedin_icon} alt='LinkedIn' />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+5641313644513</li>
                        <li>flsdfj@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='copyright'>Copyright © Onkar, Shree</p>
        </div>
    );
}

export default Footer;

import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <>

    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos alias, pariatur non labore temporibus, asperiores soluta quos minima ipsam laudantium libero dolorum suscipit vel iste perspiciatis id ducimus maxime aperiam obcaecati assumenda cupiditate animi nam neque. Sed voluptas ex aut cumque velit veritatis adipisci labore alias corporis. Perferendis, similique.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delievery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contactat@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2024 @ Tomato.com -All Right Reserved</p>
    </div>

    </>
  )
}

export default Footer
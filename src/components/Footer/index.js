import React from 'react';
import './styles.css'
import './responsive.css'

import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => (
    <div className='footer-box'>
        <a href="/">
            <img src='/images/logo.png' alt='Logo Alcatraz' />
        </a>

        <div className='footer-links'>
            <div className='item-footer'>   <a href='/about-us'>About</a>   </div>
            <div className='item-footer'>   <a href='#'>FAQ</a>   </div>
            <div className='item-footer'>   <a href='#'>Contact Us</a>   </div>
            <div className='item-footer'>   <a href='#'>Privacy Policy</a>   </div>
            <div className='item-footer'>   <a href='#'>Terms & Conditions</a>   </div>
        </div>

        <div className='footer-social-media'>
            <div className='footer-icon'> <a href='https://instagram.com/felipeeamado'> <FontAwesomeIcon icon={faInstagram} />  </a> </div>
            <div className='footer-icon'> <a href='https://facebook.com/felipe.amadosmo'> <FontAwesomeIcon icon={faFacebookF} />  </a> </div>
            <div className='footer-icon'> <a href='https://twitter.com/felipeeamado'> <FontAwesomeIcon icon={faTwitter} />    </a> </div>
            <div className='footer-icon'> <a href='https://youtube.com/user/felipegabrielamado/'> <FontAwesomeIcon icon={faYoutube} />    </a> </div>
        </div>

        <div className='copyright'> Made with &hearts; by Felipe Amado.</div>
    </div>
);

export default Footer;
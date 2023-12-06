import './Footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faLinkedinIn,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div className="Footertitle">
        <p>Logo</p>
      </div>
      <div className='FooterContact'>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-links">
          <a href="#" target="_blank" className="fab fa-twitter">
            <FontAwesomeIcon icon={faTwitter} size='2x'></FontAwesomeIcon>
          </a>
          <a href="#" target="_blank" className="fab fa-linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} size='2x'></FontAwesomeIcon>
          </a>
          <a href="#" target="_blank" className="fab fa-github">
            <FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon>
          </a>
      </div>
    </footer>
  );
}

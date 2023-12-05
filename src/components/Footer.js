import './footer.css'
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
        <div class="Footertitle">
        <p>Logo</p>
      </div>
      <div className='FooterContact'>
        <Link to="/contact">Contact</Link>
      </div>
      <div class="footer-links">
          <a href="#" target="_blank" class="fab fa-twitter">
            <FontAwesomeIcon icon={faTwitter} size='2x'></FontAwesomeIcon>
          </a>
          <a href="#" target="_blank" class="fab fa-linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} size='2x'></FontAwesomeIcon>
          </a>
          <a href="#" target="_blank" class="fab fa-github">
            <FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon>
          </a>
      </div>
    </footer>
  );
}

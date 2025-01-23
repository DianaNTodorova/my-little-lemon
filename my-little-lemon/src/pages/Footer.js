import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from '../images/The Little Lemon logo.png';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 footer">
      <div className="container">
        <div className="row justify-content-between">
          {/* Logo and Brand */}
          <div className="col-md-4 text-center text-md-left">
            <img
              src={logo}
              alt="Little Lemon Logo"
              className="img-fluid"
              style={{ maxWidth: '300px' }}
            />
          </div>

          {/* Social Media */}
          <div className="col-md-3 text-center">
            <h5 style={{ color: '#004225' }}>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className=" mx-2"
                style={{ color: '#004225' }}
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://instagram.com"
                className=" mx-2"
                style={{ color: '#004225' }}
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://twitter.com"
                className="mx-2"
                style={{ color: '#004225' }}
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://linkedin.com"
                className=" mx-2"
                style={{ color: '#004225' }}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0" style={{ color: '#004225' }}>
              &copy; {new Date().getFullYear()} Little Lemon. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

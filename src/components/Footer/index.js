import React from 'react';

// Styles
import {
  FooterWrap,
  FooterMenu,
  FooterArrow,
  SocialNetwork,
} from './Footer.styles';
// Images
import logo from '../../images/shared/desktop/logo-white.svg';
import arrow from '../../images/shared/desktop/arrow-white.svg';
const Footer = () => {
  return (
    <FooterWrap>
      <a href="/" className="logo">
        <img src={logo} alt=" photosnap logo" />
      </a>
      <FooterArrow>
        <a href="/">Get an Invite</a>
        <img src={arrow} alt="arrow" />
      </FooterArrow>
      <FooterMenu>
        <a href="/">Home</a>
        <a href="/stories">Stories</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
      </FooterMenu>
      <SocialNetwork>
        <a href="/" aria-label="Facebook icon">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="/" aria-label="Youtube icon">
          <i className="fab fa-youtube" />
        </a>
        <a href="/" aria-label="Twitter icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" aria-label="Pinterest icon">
          <i className="fab fa-pinterest"></i>
        </a>
        <a href="/" aria-label="Instagram icon">
          <i className="fab fa-instagram"></i>
        </a>
      </SocialNetwork>
      <p className="footer-copyright">Copyright 2022 . All Rights Reserved </p>
    </FooterWrap>
  );
};

export default Footer;

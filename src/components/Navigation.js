import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './Navlinks';
// Styles
import { NavContainer, NavLinksWrapper } from '../styles/Navigation.styles';
// Images
import logo from '../images/shared/desktop/logo.svg';
import open from '../images/shared/mobile/menu.svg';
import close from '../images/shared/mobile/close.svg';

const Navigation = () => {
  return (
    <NavContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <NavLinks />
    </NavContainer>
  );
};

export default Navigation;

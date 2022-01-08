import React, { useState } from 'react';


import { NavWrap, NavMenu, NavLink, MobileMenu } from './Nav.styles';

// Images
import logo from '../../images/shared/desktop/logo.svg';
import { ReactComponent as OpenMenu } from '../../images/shared/mobile/menu.svg';
import { ReactComponent as CloseMenu } from '../../images/shared/mobile/close.svg';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close = () => setClick(false);

  return (
    <NavWrap>
      <NavLink to="/">
        <img src={logo} alt=" photosnap logo" />
      </NavLink>
      <NavMenu className={click ? 'nav-hidden' : 'nav-hidden  active'}>
        <NavLink onClick={close} to="/stories">
          Stories
        </NavLink>
        <NavLink onClick={close} to="/features">
          Features
        </NavLink>
        <NavLink onClick={close} to="/pricing">
          Pricing
        </NavLink>
        <NavLink onClick={close} to="/" className="nav-btn nav-btn-mobile">
          Get an invite
        </NavLink>
      </NavMenu>
      <NavLink onClick={close} to="/" className="nav-btn nav-btn-desktop">
        Get an invite
      </NavLink>
      <MobileMenu className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <OpenMenu className="menu-icon" />
        )}
      </MobileMenu>
    </NavWrap>
  );
};
export default Nav;

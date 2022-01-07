import React from 'react';
import { Link } from 'react-router-dom';
import { NavList, NavItem } from '../styles/Navigation.styles';
const NavLinks = () => {
  const pageLinks = ['home', 'stories', 'features', 'pricing'];
  return (
    <NavList>
      {pageLinks.map((link, i) => {
        <NavItem key={i}>
          <Link to={i === 0 ? `/` : `/${link}`}>{link}</Link>;
        </NavItem>;
      })}
    </NavList>
  );
};
export default NavLinks;

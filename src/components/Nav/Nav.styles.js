import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 0 4.5rem;

  z-index: 2;
  .mobile-menu {
    display: none;
  }
  .nav-btn {
    background: var(--black);
    color: var(--white);
    padding: 1rem 2rem;
    &:hover {
      background: var(--gray);
      color: var(--black);
    }
  }
  .nav-btn-mobile {
    display: none;
    margin: 2rem;
  }
  @media (max-width: 712px) {
    .mobile-menu,
    .nav-btn-mobile {
      display: block;
    }
    .nav-btn-desktop {
      display: none;
    }
    .nav-hidden {
      position: absolute;
      height: 30rem;
      top: 7%;
      left: 0;
      display: flex;
      flex-direction: column;
      background: var(--white);
      width: 100%;
      text-align: center;
      transition: 1s;
      z-index: 1;
    }
    .nav-hidden.active {
      top: -50%;
    }
  }
`;
export const NavLink = styled(Link)`
  font-size: 1.2rem;
  padding: 0 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--black);
  &.active {
    color: var(--gray);
  }
  z-index: 20;
  @media (max-width: 712px) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;
export const NavMenu = styled.div`
  @media (max-width: 712px) {
    font-size: 1.5rem;
    padding-top: 5rem;
  }
`;
export const MobileMenu = styled.div`
  z-index: 10;
  cursor: pointer;
`;

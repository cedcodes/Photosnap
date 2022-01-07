import React from 'react';

import { Link } from 'react-router-dom';

// Styles
import { Container } from '../styles/Navigation.styles';
// Images

const Navigation = () => {
  return (
    <Container>
      <Link to="/">Main</Link>
      <Link to="/Stories">Stories</Link>
      <Link to="/features">features</Link>
      <Link to="/pricing">Pricing</Link>
    </Container>
  );
};

export default Navigation;

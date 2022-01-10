import React, { useState } from 'react';
import { Hero, Features } from '../components';
import JumbotronContainer from '../containers/jumbotron';
import { ThumbnailHome } from '../containers/thumbnailHome';

const Home = () => {
  return (
    <>
      <Hero />
      <JumbotronContainer />
      <ThumbnailHome />
      <Features />
    </>
  );
};

export default Home;

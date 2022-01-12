import React, { useState } from 'react';
import { Hero, FeaturesHome } from '../components';
import JumbotronContainer from '../containers/jumbotron';
import { ThumbnailHome } from '../containers/thumbnailHome';

const Home = () => {
  return (
    <>
      <Hero />
      <JumbotronContainer />
      <ThumbnailHome />
      <FeaturesHome />
    </>
  );
};

export default Home;

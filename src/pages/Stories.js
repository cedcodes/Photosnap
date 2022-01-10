import React from 'react';
import { StoryHero } from '../components';
import { ThumbnailContainer } from '../containers/thumbnail';
const Stories = () => {
  return (
    <div>
      <StoryHero />
      <ThumbnailContainer />
    </div>
  );
};

export default Stories;

import React from 'react';
import * as image from '../../../images/features';
import FeatureCard from '../../Features/FeatureAttribute';
import styled from 'styled-components';

const FeatureCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Features = () => {
  return (
    <FeatureCardWrapper>
      <FeatureCard
        image={image.responsive}
        heading="100% Responsive"
        subheading="No matter which the device you’re on, our site is fully responsive and stories 
            look beautiful on any screen."
      />
      <FeatureCard
        image={image.noLimit}
        heading="No Photo Upload Limit"
        subheading="Our FeatureCardtool has no limits on uploads or bandwidth. Freely upload in bulk and share 
            all of your stories in one go."
      />
      <FeatureCard
        image={image.embeded}
        heading="Available to Embed"
        subheading="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google 
            Maps, and more."
      />
    </FeatureCardWrapper>
  );
};

export default Features;

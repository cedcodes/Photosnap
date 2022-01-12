import React from 'react';
import * as image from '../../images/features';
import FeatureCard from './FeatureAttribute';
import styled from 'styled-components';

const FeatureCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const FeaturesGrid = () => {
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
      <FeatureCard
        image={image.domain}
        heading="Custom Domain"
        subheading="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
      />
      <FeatureCard
        image={image.exposure}
        heading="Boost Your Exposure"
        subheading="Users that viewed your story or gallery can easily get notified of new and featured stories with our built-in mailing list"
      />
      <FeatureCard
        image={image.dragDrop}
        heading="Available to Embed"
        subheading="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
      />
    </FeatureCardWrapper>
  );
};

export default FeaturesGrid;

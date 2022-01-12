import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import imageMobile from '../../images/features/mobile/hero.jpg';
import imageTablet from '../../images/features/tablet/hero.jpg';
import imageDesktop from '../../images/features/desktop/hero.jpg';

// Styles
import {
  HeroWrapper,
  HeroPane,
  HeroTitle,
  HeroSubTitle,
  HeroImage,
} from '../Home/Hero/Hero.styles';

const FeaturesHero = ({ item }) => {
  const mobile = useMediaQuery('(min-width: 612px)');
  const tablet = useMediaQuery(
    'only screen and (min-width:612px) and (max-width:1000px)'
  );
  const desktop = useMediaQuery('(max-width:1000px)');
  return (
    <>
      <HeroWrapper>
        <HeroPane>
          <HeroTitle>Features</HeroTitle>
          <HeroSubTitle>
            We make sure all of our features are designed to by loved by every
            aspiring and even professional phorographers who wanted to share
            their stories.
          </HeroSubTitle>
        </HeroPane>

        {mobile ? '' : <HeroImage src={imageMobile} />}
        {tablet ? <HeroImage src={imageTablet} /> : ''}
        {desktop ? '' : <HeroImage src={imageDesktop} />}
      </HeroWrapper>
    </>
  );
};

export default FeaturesHero;

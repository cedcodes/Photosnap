import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import imageMobile from '../../images/pricing/mobile/hero.jpg';
import imageTablet from '../../images/pricing/tablet/hero.jpg';
import imageDesktop from '../../images/pricing/desktop/hero.jpg';

// Styles
import {
  HeroWrapper,
  HeroPane,
  HeroTitle,
  HeroSubTitle,
  HeroImage,
} from '../Home/Hero/Hero.styles';

const PricingHero = ({ item }) => {
  const mobile = useMediaQuery('(min-width: 612px)');
  const tablet = useMediaQuery(
    'only screen and (min-width:612px) and (max-width:1000px)'
  );
  const desktop = useMediaQuery('(max-width:1000px)');
  return (
    <>
      <HeroWrapper>
        <HeroPane>
          <HeroTitle>Pricing</HeroTitle>
          <HeroSubTitle>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </HeroSubTitle>
        </HeroPane>

        {mobile ? '' : <HeroImage src={imageMobile} />}
        {tablet ? <HeroImage src={imageTablet} /> : ''}
        {desktop ? '' : <HeroImage src={imageDesktop} />}
      </HeroWrapper>
    </>
  );
};

export default PricingHero;

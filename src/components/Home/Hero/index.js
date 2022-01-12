import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import imageMobile from '../../../images/home/mobile/create-and-share.jpg';
import imageTablet from '../../../images/home/tablet/create-and-share.jpg';
import imageDesktop from '../../../images/home/desktop/create-and-share.jpg';
import arrow from '../../../images/shared/desktop/arrow-white.svg';
// Styles
import {
  HeroWrapper,
  HeroPane,
  HeroTitle,
  HeroSubTitle,
  HeroImage,
  HeroButton,
} from './Hero.styles';

const Hero = ({ item }) => {
  const mobile = useMediaQuery('(min-width: 612px)');
  const tablet = useMediaQuery(
    'only screen and (min-width:612px) and (max-width:1000px)'
  );
  const desktop = useMediaQuery('(max-width:1000px)');
  return (
    <>
      <HeroWrapper>
        <HeroPane>
          <HeroTitle>Create and share your photo stories</HeroTitle>
          <HeroSubTitle>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others
          </HeroSubTitle>
          <HeroButton>
            Get an Invite
            <img src={arrow} alt="arrow" />
          </HeroButton>
        </HeroPane>

        {mobile ? '' : <HeroImage src={imageMobile} />}
        {tablet ? <HeroImage src={imageTablet} /> : ''}
        {desktop ? '' : <HeroImage src={imageDesktop} />}
      </HeroWrapper>
    </>
  );
};

export default Hero;

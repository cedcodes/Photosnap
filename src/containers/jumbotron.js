import React, { useContext } from 'react';
import jumboData from '../data/home.json';
import { Jumbotron } from '../components';
import { useMediaQuery } from '@react-hook/media-query';
import arrow from '../images/shared/desktop/arrow.svg';
const JumbotronContainer = () => {
  // const mobile = useMediaQuery('(min-width: 390px)');
  // const tablet = useMediaQuery(
  //   'only screen and (min-width:391px) and (max-width:870px)'
  // );
  // const desktop = useMediaQuery('(max-width:845px)');
  const mobile = useMediaQuery('(min-width: 612px)');
  const tablet = useMediaQuery(
    'only screen and (min-width:612px) and (max-width:1000px)'
  );
  const desktop = useMediaQuery('(max-width:1000px)');
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            <Jumbotron.Button>
              {item.button}
              <img src={arrow} alt="arrow" />
            </Jumbotron.Button>
          </Jumbotron.Pane>
          {mobile ? '' : <Jumbotron.Image src={item.imageMobile} />}
          {tablet ? <Jumbotron.Image src={item.imageTablet} /> : ''}
          {desktop ? '' : <Jumbotron.Image src={item.imageDesk} />}
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default JumbotronContainer;

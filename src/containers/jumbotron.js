import React, { useContext } from 'react';
import jumboData from '../data/jumbo.json';
import { Jumbotron } from '../components';
import { useMediaQuery } from '@react-hook/media-query';

const JumbotronContainer = () => {
  const mobile = useMediaQuery('(min-width: 390px)');
  const tablet = useMediaQuery(
    'only screen and (min-width:391px) and (max-width:870px)'
  );
  const desktop = useMediaQuery('(max-width:845px)');

  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            <Jumbotron.Button>{item.button}</Jumbotron.Button>
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

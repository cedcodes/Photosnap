import React from 'react';
import { Thumbnail } from '../components';
import thumbnailData from '../data/homestories.json';
import arrow from '../images/shared/desktop/arrow-white.svg';
export function ThumbnailHome() {
  return (
    <Thumbnail.Container>
      {thumbnailData.map((item) => (
        <Thumbnail key={item.id}>
          <Thumbnail.Image src={`../images/stories/desktop/${item.image}`} />
          <Thumbnail.Text>
            <Thumbnail.Date>{item.date}</Thumbnail.Date>
            <Thumbnail.Title>{item.title}</Thumbnail.Title>
            <Thumbnail.Author>by {item.author}</Thumbnail.Author>
            <hr />
            <Thumbnail.Button>
              <p> Read the story</p> <img src={arrow} alt="arrow" />{' '}
            </Thumbnail.Button>
          </Thumbnail.Text>
        </Thumbnail>
      ))}
    </Thumbnail.Container>
  );
}

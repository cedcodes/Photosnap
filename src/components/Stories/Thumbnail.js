import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  transition: 0.5s;
  &:hover {
    transform: translateY(-40px);
  }
`;
const Inner = styled.div`
  display: flex;
  position: relative;
  color: var(--white);
  &::after {
    content: ' ';
    position: absolute;
    transform: translateY(-50%);
    left: 0;
    bottom: -1.5rem;
    width: 100%;
    height: 1.5rem;
    background: linear-gradient(90deg, #ffc694, #bc7198, #5776ff);
    z-index: -4;
  }
`;
const Container = styled.div`
  hr {
    opacity: 0.5;
  }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Text = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 4rem;
`;
const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0.5rem 0;
`;
const Date = styled.div`
  font-size: 1.3rem;
`;
const Author = styled.div`
  font-size: 1.3rem;
  padding-bottom: 2rem;
`;
const Button = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  padding-top: 2rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 100%;
`;

const Thumbnail = ({ children, ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner>{children}</Inner>
    </Item>
  );
};

Thumbnail.Container = function ThumbnailContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Thumbnail.Title = function ThumbnailSubTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Thumbnail.Text = function ThumbnailSubTitle({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Thumbnail.Date = function ThumbnailSubDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};
Thumbnail.Author = function ThumbnailSubDate({ children, ...restProps }) {
  return <Author {...restProps}>{children}</Author>;
};

Thumbnail.Image = function ThumbnailImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Thumbnail.Button = function ThumbnailButton({ ...restProps }) {
  return <Button {...restProps} />;
};

export default Thumbnail;

import React from 'react';
import styled from 'styled-components';
import arrow from '../../images/shared/desktop/arrow-white.svg';

const Container = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  z-index: -2;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  position: absolute;
  color: var(--white);
  width: 30%;
  margin-left: 10%;
  @media (max-width: 1200px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    position: relative;
    background: var(--black);
    width: 100%;
    margin: 0;
    padding: 5rem 2.5rem;
  }
`;
const Heading = styled.p`
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 4px;
`;
const Title = styled.h1`
  font-size: 4.5rem;
  margin: 3rem 0 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Date = styled.p`
  font-size: 1.3rem;
  padding: 1rem;
`;
const SubTitle = styled.p`
  font-size: 1.3rem;
  padding-bottom: 2rem;
  line-height: 2;
  letter-spacing: 1px;
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
  max-width: 100%;
`;

const StoryHero = () => {
  return (
    <Container>
      <Image src="../../images/stories/desktop/moon-of-appalacia.jpg" />
      <Text>
        <Heading>Last month's featured story</Heading>
        <Title>Hazy full moon of appalacia</Title>
        <Date>March 2nd 2020 by John Appleseed</Date>
        <SubTitle>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged. //{' '}
        </SubTitle>
        <Button>
          <p> Read the story</p> <img src={arrow} alt="arrow" />
        </Button>
      </Text>
    </Container>
  );
};

export default StoryHero;

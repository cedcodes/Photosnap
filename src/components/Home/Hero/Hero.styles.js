import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: space-between;

  @media (max-width: 612px) {
    flex-direction: column-reverse;
  }
`;
export const HeroPane = styled.div`
  position: relative;
  align-self: center;
  width: 80%;
  padding: 0 7rem;
  @media (max-width: 612px) {
    padding: 5rem;
    width: 100%;
    &::before {
      content: ' ';
      position: absolute;
      top: 3px;
      transform: translateY(-50%);
      left: 5rem;
      width: 15rem;
      height: 5px;
      background: linear-gradient(90deg, #ffc694, #bc7198, #5776ff);
    }
  }
  @media (min-width: 612px) {
    &::before {
      content: ' ';
      position: absolute;
      top: 43%;
      transform: translateY(-50%);
      left: 0;
      width: 3px;
      height: 30rem;
      background: linear-gradient(180deg, #ffc694, #bc7198, #5776ff);
    }
  }
`;
export const HeroTitle = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 612px) {
    flex-direction: column-reverse;
  }
`;
export const HeroSubTitle = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  letter-spacing: 1px;
  padding: 3rem 0;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
export const HeroButton = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  img {
    padding-left: 2rem;
    transition: 1s;
  }
  &:hover {
    img {
      padding-left: 5rem;
    }
  }
`;
export const HeroImage = styled.img`
  object-fit: cover;
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

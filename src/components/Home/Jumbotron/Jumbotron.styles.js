import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;
  @media (max-width: 612px) {
    flex-direction: column-reverse;
  }
`;
export const Item = styled.div``;
export const Container = styled.div`
  /* @media (max-width: 612px) { */
  /* flex-direction: row-reverse; */
  /* } */
`;
export const Pane = styled.div`
  align-self: center;
  width: 80%;
  padding: 0 7rem;
  @media (max-width: 612px) {
    padding: 5rem;
    width: 100%;
  }
  @media (max-width: 1063px) {
    padding: 0 3rem;
  }
  @media (max-width: 612px) {
    padding: 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
export const SubTitle = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
  letter-spacing: 1px;
  padding: 3rem 0;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
export const Button = styled.div`
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
export const Image = styled.img`
  object-fit: contain;
  @media (min-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 1190px) {
    width: 60%;
    max-height: 100%;
  }
  @media (max-width: 612px) {
    width: 100%;
  }
`;

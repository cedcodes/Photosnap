import styled from 'styled-components';

export const FooterWrap = styled.footer`
  background: var(--black);
  height: 25rem;
  padding: 6.4rem 16.5rem;
  color: var(--white);
  display: grid;
  grid-template-areas:
    'a b c '
    'd b e';
  grid-template-columns: 28rem auto auto;
  @media (max-width: 1000px) {
    padding: 6rem;
  }
  @media (max-width: 768px) {
    padding: 6rem;
    height: 28rem;
    grid-template-areas:
      'a c'
      'b b'
      'd e';
    grid-template-columns: 180px auto;
  }
  @media (max-width: 612px) {
    margin: auto;
    text-align: center;
    height: auto;
    grid-template-areas:
      'a'
      'd'
      'b'
      'c'
      'e';
    grid-template-columns: auto;
    grid-template-rows: 50px 69px 240px 48px auto;
    justify-content: center;
    padding: 57px;
  }
  .logo {
    grid-area: a;
  }
  a {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--white);
    padding: 0.7rem;
  }
  .footer-copyright {
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 1.5rem;
    grid-area: e;
    justify-self: end;
    align-self: end;
    opacity: 0.5;
    @media (max-width: 612px) {
      margin-top: -10rem;
    }
  }
`;

export const FooterMenu = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  justify-self: start;
  align-self: start;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 612px) {
    flex-direction: column;
    padding-bottom: 0;
    margin: 0 auto;
  }
`;
export const SocialNetwork = styled.div`
  a {
    font-size: 2rem;
    color: var(--white);
    padding: 0.7rem;
  }
`;
export const FooterArrow = styled.div`
  grid-area: c;
  justify-self: end;
  @media (max-width: 612px) {
    margin: 0 auto;
    margin-top: -10rem;
  }
`;

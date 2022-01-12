import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../images/shared/desktop/arrow-white.svg';
const Wrapper = styled.div`
  div {
    background: url(../../images/shared/desktop/bg-beta.jpg) no-repeat;
    background-size: cover;
    padding: 6.4rem 3.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::before {
      content: ' ';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 0.7rem;
      height: 100%;
      background: linear-gradient(180deg, #ffc694, #bc7198, #5776ff);
    }

    @media (max-width: 768px) {
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

      flex-direction: column;
      text-align: left;
      h2 {
        width: 100%;
      }
      a {
        padding: 2rem 0;
        width: 100%;
      }
    }
  }
  h2,
  a {
    color: var(--white);
    text-transform: uppercase;
  }
  h2 {
    font-size: 4rem;
    width: 50%;
  }
  a {
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    .arrow {
      margin-left: 3rem;
    }
  }
`;

const PricingFooter = () => {
  return (
    <Wrapper>
      <div>
        <h2> We’re in beta. Get your invite today!</h2>
        <a href="#">
          Get an invite <Arrow className="arrow" />
        </a>
      </div>
    </Wrapper>
  );
};

export default PricingFooter;

import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 700px;
  padding: 30px;
  margin: 2rem 2.5rem;
  background: var(--gray);
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .black {
    display: none;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    height: 250px;
  }
  h2 {
    font-size: 2.25rem;
    padding-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    padding-bottom: 4rem;
  }
  .price {
    font-size: 3rem;
    padding-bottom: 1rem;
  }
  small {
    font-size: 1.25rem;
    font-weight: lighter;
  }
  a {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.3rem;
    padding: 2rem;
    width: 100%;
    background: black;
    color: var(--white);
    transition: 0.5s;
    &:hover {
      background: var(--white);
      color: var(--black);
    }
    @media (max-width: 768px) {
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      padding: 2rem auto;
      margin: 2rem 3rem;
      width: 50%;
    }
  }
  &:nth-of-type(2) {
    &::before {
      content: '';
      height: 0.5rem;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(90deg, #ffc694, #bc7198, #5776ff);
    }
    background: var(--black);
    color: var(--white);
    @media (max-width: 768px) {
      &::before {
        content: '';
        height: 100%;
        width: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, #ffc694, #bc7198, #5776ff);
      }
    }
    @media (min-width: 768px) {
      transform: scale(1.1);
    }
    a {
      background: var(--white);
      color: var(--black);
      &:hover {
        background: var(--gray);
      }
    }
  }
`;
export const PriceCard = ({ plan, description, price, billing }) => {
  return (
    <>
      <Wrapper>
        <div>
          <h2>{plan}</h2>
          <p>{description}</p>
        </div>
        <div className="bills">
          <p className="price">{price}</p>
          <p>{billing}</p>
        </div>
        <a href="">Pick a Plan</a>
      </Wrapper>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 5rem;

  .textbox {
    text-align: center;
    padding: 5rem 0;
    .heading {
      font-size: 1.8rem;
      font-weight: 600;
    }
    .subheading {
      font-size: 1.5rem;
      opacity: 0.5;
      padding: 2rem;
    }
  }
  @media (max-width: 700px) {
    .textbox {
      padding: 0;
    }
  }
`;
const FeatureCard = ({ image, heading, subheading }) => (
  <Wrapper>
    <div className="img-wrapper">
      <img src={image} alt={`${heading} icon`} />
    </div>
    <div className="textbox">
      <h4 className="heading">{heading}</h4>
      <p className="subheading">{subheading}</p>
    </div>
  </Wrapper>
);

export default FeatureCard;

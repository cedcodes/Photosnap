import React, { useState } from 'react';
import styled from 'styled-components';
import { PriceCard } from './PriceCard';
const Wrapper = styled.div`
  .black {
    display: none !important;
  }
  padding: 4rem;
  input {
    display: none;
  }
  span {
    font-size: 1.5rem;
  }
  .toggle-switch {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    margin: 35px 20px 60px;
    transition: 2s;
  }
  .toggle-annually,
  .toggle-monthly {
    position: relative;
    margin: 0 50px;
    &::after,
    &::before {
      content: '';
      position: absolute;
      cursor: pointer;
    }
  }
  .toggle-annually::after {
    height: 30px;
    width: 55px;
    border-radius: 50px;
    display: inline-block;
    background: var(--gray);
    transform: translate(20px, -5px);
  }
  .toggle-monthly::before {
    height: 24px;
    width: 24px;
    background: var(--black);
    display: inline-block;
    border-radius: 50%;
    transform: translate(-75px, -2px);
  }

  #toggle:checked + * .toggle-monthly::before {
    transform: translate(-54px, -2px);
  }
  .card-wrapper {
    display: flex;
    width: 100%;
    max-width: 1050px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .featured {
    display: none;
  }
`;

const PricingToggle = ({ style, plan, description, price, billing }) => {
  const [monthly, setMonthly] = useState(true);

  return (
    <Wrapper>
      <input type="checkbox" id="toggle" />
      <label
        htmlFor="toggle"
        className="toggle-switch"
        onClick={() => {
          setMonthly(!monthly);
        }}
      >
        <span className="toggle-annually">Annually</span>
        <span className="toggle-monthly">Monthly</span>
      </label>
      <div className="card-wrapper">
        <PriceCard
          plan="Basic"
          description="Includes basic usage of our platform. Recommended for new
        and aspiring photographers."
          price={monthly ? '$19.00' : '$190.00'}
          billing={`per ${monthly ? 'month' : 'year'}`}
        />
        <PriceCard
          plan="Pro"
          description="More advanced features available. Recommended for photography veterans and professionals."
          price={monthly ? '$39.00' : '$390.00'}
          billing={`per ${monthly ? 'month' : 'year'}`}
        />
        <PriceCard
          plan="Business"
          description="Additional features available such as more detailed metrics. Recommended for business owners."
          price={monthly ? '$99.00' : '$990.00'}
          billing={`per ${monthly ? 'month' : 'year'}`}
        />
      </div>
    </Wrapper>
  );
};

export default PricingToggle;

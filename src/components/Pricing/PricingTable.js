import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    text-align: center;
    font-weight: normal;
    font-size: 2.5rem;
  }
  .checked {
    background: url(../../images/pricing/desktop/check.svg);
    background-position: center center;
    background-repeat: no-repeat;
  }
  thead {
    th {
      width: 100%;
      border-bottom: 1px solid var(--black);
    }
  }

  th,
  td {
    border-bottom: 1px solid var(--gray);
  }

  table {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    width: 70vw;
    td,
    th {
      padding: 20px 0;
      font-size: 1.3rem;
      font-weight: 700;
      /* text-align: center; */
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
  @media (max-width: 768px) {
    h2 {
      display: none;
    }
    .heading {
      opacity: 0;
    }
    tbody {
      margin-left: auto;
      margin-right: auto;
      /* position: relative; */
    }
    tr {
      display: grid;
      grid-template-areas: '1' '2';
    }
    tr {
    }
    th {
      border-bottom: none;
      grid-area: 1;
    }
    td {
      width: 100%;
      grid-area: 2;
      margin-left: auto;
      margin-right: auto;
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        &::before {
          opacity: 0.6;
          font-size: 1rem;
          display: block;
          text-transform: uppercase;
          margin-bottom: 4rem;
          text-align: center;
        }
      }
      &:nth-child(2) {
        &::before {
          content: 'basic';
        }
      }
      &:nth-child(3) {
        &::before {
          content: 'Pro';
        }
      }
      &:nth-child(4) {
        &::before {
          content: 'Business';
        }
      }
    }
  }
`;

const PricingTable = () => {
  const features = [
    {
      id: 1,
      name: 'Unlimited Story Posting',
      basic: true,
      pro: true,
      business: true,
    },
    {
      id: 2,
      name: 'Unlimited Photo Upload',
      basic: true,
      pro: true,
      business: true,
    },
    {
      id: 3,
      name: 'Embedding Custom Content',
      basic: false,
      pro: true,
      business: true,
    },
    {
      id: 4,
      name: 'Customize Metadata',
      basic: false,
      pro: true,
      business: true,
    },
    {
      id: 5,
      name: 'Advanced Metrics',
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 6,
      name: 'Photo Downloads',
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 7,
      name: 'Search Engine Indexing',
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 8,
      name: 'Custom Analytics',
      basic: false,
      pro: false,
      business: true,
    },
  ];
  return (
    <Wrapper>
      <h2>Compare</h2>
      <table>
        <thead>
          <tr>
            <th>The Features</th>
            <th className="heading">Basic</th>
            <th className="heading">Pro</th>
            <th className="heading">Business</th>
          </tr>
        </thead>
        <tbody>
          {features.map(({ id, name, basic, pro, business }) => (
            <tr key={id} className="checks">
              <th>{name}</th>
              {/* <tr> */}
              <td className={basic ? 'checked' : ''}></td>
              <td className={pro ? 'checked' : ''}></td>
              <td className={business ? 'checked' : ''}></td>
              {/* </tr> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};
export default PricingTable;

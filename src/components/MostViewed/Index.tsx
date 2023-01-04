import React from 'react';
import styled from 'styled-components';
import { Image } from '../Helper/Image';
import i1 from '../../assets/images/image-retro-pcs.jpg';
import i2 from '../../assets/images/image-top-laptops.jpg';
import i3 from '../../assets/images/image-gaming-growth.jpg';
import { device } from '../../styles/BreackPoints';

export const MostViewed = () => {
  return (
    <Container>
      <article>
        <Image alt="Retro pc" source={i1} />
        <ul>
          <li>
            <span>01</span>
          </li>
          <li>
            <a href="/">Reviving Retro PCs</a>
          </li>
          <li>
            <p>What happens when old PCs are given modern upgrades?</p>
          </li>
        </ul>
      </article>
      <article>
        <Image alt="Retro pc" source={i2} />
        <ul>
          <li>
            <span>02</span>
          </li>
          <li>
            <a href="/">Top 10 Laptops of 2022</a>
          </li>
          <li>
            <p>Our best picks for various needs and budgets.</p>
          </li>
        </ul>
      </article>
      <article>
        <Image alt="Retro pc" source={i3} />
        <ul>
          <li>
            <span>03</span>
          </li>
          <li>
            <a href="/">The Growth of Gaming</a>
          </li>
          <li>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </li>
        </ul>
      </article>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => theme.container}

  display:flex;
  justify-content: space-between;
  gap: 10px;

  margin-top: 70px;
  margin-bottom: 40px;

  @media ${device.sm} {
    flex-wrap: wrap;
    gap: 33px;
  }

  article {
    display: flex;
    gap: 25px;

    div {
      width: 100%;
      max-width: 100px;
      img {
        width: 100%;
        max-width: 100px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
      li {
        span {
          color: ${({ theme }) => theme.colors.GrayishBlue};
          font-weight: bold;
          font-size: 30px;
        }
        a {
          color: ${({ theme }) => theme.colors.VeryDarkBlue};
          font-size: 16px;
          font-weight: bold;
          padding-top: 20px;

          &:hover {
            color: ${({ theme }) => theme.colors.Secondary};
          }
        }
      }
    }
  }
`;

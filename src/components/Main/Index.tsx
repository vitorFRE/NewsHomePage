import React from 'react';
import styled from 'styled-components';
import I3Desktop from '../../assets/images/image-web-3-desktop.jpg';
import I3Mobile from '../../assets/images/image-web-3-mobile.jpg';
import { device } from '../../styles/BreackPoints';
import { Image } from '../Helper/Image';

export const Main = () => {
  return (
    <Container>
      <MainSection>
        <picture>
          <source media="(max-width: 400px)" srcSet={I3Mobile} />
          <img alt="Main imagem" src={I3Desktop} width={1460} height={600} />
        </picture>
        <div>
          <h1>The Bright Future of Web 3.0?</h1>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a href="/">READ MORE</a>
        </div>
      </MainSection>
      <AsideSection>
        <h1>New</h1>
        <ul>
          <li>
            <a href="/">Hydrogen VS Electric Cars</a>
          </li>
          <li>Will hydrogen-fueled cars ever catch up to EVs?</li>
        </ul>
        <ul>
          <li>
            <a href="/">The Downsides of AI Artistry</a>
          </li>
          <li>
            What are the possible adverse effects of on-demand AI image
            generation?
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Is VC Funding Drying Up?</a>
          </li>
          <li>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </li>
        </ul>
      </AsideSection>
    </Container>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.container}

  display:grid;
  grid-template-columns: minmax(200px, 730px) auto;
  gap: 30px;

  margin-top: 50px;

  @media ${device.sm} {
    grid-template-columns: 1fr;
  }
`;

const MainSection = styled.section`
  > div {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media ${device.sm} {
      grid-template-columns: 1fr;
    }
    h1 {
      font-size: 55px;
      grid-row: 1/3;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.VeryDarkBlue};

      @media ${device.md} {
        font-size: 30px;
        margin-bottom: 23px;
      }
    }
    p {
      color: ${({ theme }) => theme.colors.DarkGrayishBlue};
      @media ${device.sm} {
        font-size: 14px;
      }
    }
    a {
      color: ${({ theme }) => theme.colors.OffWhite};
      background-color: ${({ theme }) => theme.colors.Secondary};
      width: max-content;
      height: max-content;
      padding: 15px 30px;
      margin-top: 20px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.VeryDarkBlue};
      }
    }
  }
`;

const AsideSection = styled.aside`
  background-color: ${({ theme }) => theme.colors.VeryDarkBlue};
  max-width: 350px;

  @media ${device.sm} {
    max-width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.Primary};
    padding: 40px 23px 40px 23px;
  }

  ul {
    li {
      :first-child {
        font-size: 20px;
        padding-left: 23px;
        color: ${({ theme }) => theme.colors.OffWhite};
        font-weight: 600;
        &:hover {
          color: ${({ theme }) => theme.colors.Primary};
        }
      }
      :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.DarkGrayishBlue};
        font-size: 1rem;
        padding-bottom: 14px;
        margin: 14px 25px 14px 25px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.GrayishBlue};
      }
    }
  }
`;

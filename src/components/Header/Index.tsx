import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../../assets/images/icon-menu.svg';
import menuClosed from '../../assets/images/icon-menu-close.svg';
import { device } from '../../styles/BreackPoints';

interface HeaderProps {
  // Props
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <div className="HeaderLogo">
        <h1>W.</h1>
      </div>

      <HeaderNav>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={menuClosed} alt="menu close" />
          ) : (
            <img src={menu} alt="menu open" />
          )}
        </button>
        <ul style={{ display: isOpen ? 'flex' : '' }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">New</a>
          </li>
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
        </ul>
        {isOpen && <div className="menu-overlay" />}
      </HeaderNav>
    </Container>
  );
};

const Container = styled.header`
  ${({ theme }) => theme.container}

  display:flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 85px;

  @media ${device.sm} {
    margin-top: 25px;
  }

  .HeaderLogo {
    font-family: 'Times New Roman', Times, serif;
    h1 {
      font-size: 4rem;

      @media ${device.sm} {
        font-size: 3.12rem;
      }
    }
  }
`;

const HeaderNav = styled.nav`
  .menu-overlay {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background-color: rgba(0, 0, 70, 0.1);
  }
  > button {
    display: none;
    background-color: transparent;
    position: relative;
    border: none;
    z-index: 999;
    cursor: pointer;

    @media ${device.sm} {
      display: block;
    }
  }

  ul {
    display: flex;
    gap: 37px;
    align-items: center;

    li {
      color: ${({ theme }) => theme.colors.DarkGrayishBlue};

      &:hover {
        color: ${({ theme }) => theme.colors.Secondary};
      }
    }

    @media ${device.sm} {
      display: none;
      z-index: 888;

      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      width: 70%;
      height: 100%;
      padding-top: 144px;
      padding-left: 24px;

      background-color: white;

      position: absolute;
      top: 0px;
      right: 0px;

      li {
        color: ${({ theme }) => theme.colors.VeryDarkBlue};
      }
    }
  }
`;

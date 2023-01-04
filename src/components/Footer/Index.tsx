import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      Challenge by
      <a
        href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/vitorFRE"> VitorFRE</a>.
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;

  margin-bottom: 40px;

  a {
    color: ${({ theme }) => theme.colors.Primary};
  }
`;

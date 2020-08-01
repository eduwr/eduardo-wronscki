import React from 'react';
import styled, { keyframes } from 'styled-components';

import smallCircle from '../../assets/svg/innerCircle.svg';
import bigCircle from '../../assets/svg/outterCircle.svg';

const rotateClockwise = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;
const rotateCounterclockwise = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(-360deg)
  }
`;

const SmallCircle = styled.img`
  height: 260px;
  width: 260px;
  position: absolute;
  animation: 60s ${rotateClockwise} linear infinite;
  filter: ${(props) => props.theme.dropShadow.circles};
  @media (max-height: 400px) {
    display: none;
  }
`;

const BigCircle = styled.img`
  height: 360px;
  width: 360px;
  position: absolute;
  animation: 60s ${rotateCounterclockwise} linear infinite;
  filter: ${(props) => props.theme.dropShadow.circles};
  @media (max-width: ${(props) => props.theme.layoutDivisors.maxWidth}) {
    display: none;
  }
  @media (max-height: ${(props) => props.theme.layoutDivisors.maxHeight}) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Circles: React.FC = ({ children }) => {
  return (
    <Container>
      <SmallCircle src={smallCircle} />
      <BigCircle src={bigCircle} />
      {children}
    </Container>
  );
};

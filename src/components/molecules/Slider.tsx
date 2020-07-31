import React from 'react';
import styled, { keyframes } from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
`;

const toLeft = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-50%)
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
  animation: 60s ${toLeft} linear infinite;
`;

export const Slider: React.FC = ({ children }) => {
  return (
    <SliderContainer>
      <SliderWrapper>{children}</SliderWrapper>
    </SliderContainer>
  );
};

import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  position: absolute;
  fill: ${(props) => props.theme.colors.darkBlue};
`;

export const HeaderBackground: React.FC = () => {
  return (
    <Svg preserveAspectRatio="none" viewBox="0 0 100 100">
      <rect x="0" y="0" width="100%" height="50%" />
    </Svg>
  );
};

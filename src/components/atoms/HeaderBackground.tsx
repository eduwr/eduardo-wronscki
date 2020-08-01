import React from 'react';
import styled from 'styled-components';

const SvgAttrs = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Svg = styled(SvgAttrs)`
  height: 100%;
  width: 100%;
  position: absolute;
  fill: ${(props) => props.theme.colors.darkBlue};
  top: 0;
  min-height: 350px;
`;

export const HeaderBackground: React.FC = () => {
  return (
    <Svg preserveAspectRatio="none" viewBox="0 0 100 100">
      <rect x="0" y="0" width="100%" height="50%" />
    </Svg>
  );
};

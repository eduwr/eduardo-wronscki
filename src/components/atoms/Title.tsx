import React from 'react';
import styled from 'styled-components';

const HText = styled.h1`
  color: ${(props) => props.theme.colors.lightGrey};
  font-size: ${(props) => props.theme.fontSize.large};
  z-index: 10;
`;

export const Title: React.FC = ({ children }) => {
  return <HText>{children}</HText>;
};

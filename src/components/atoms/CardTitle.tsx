import React from 'react';
import styled from 'styled-components';

const HText = styled.h2`
  color: ${(props) => props.theme.colors.lightGrey};
  font-size: ${(props) => props.theme.fontSize.medium};
  z-index: 10;
`;

export const CardTitle: React.FC = ({ children }) => {
  return <HText>{children}</HText>;
};

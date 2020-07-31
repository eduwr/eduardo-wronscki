import React from 'react';
import styled from 'styled-components';

const PText = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.darkPurple};
`;

export const SubTitle: React.FC = ({ children }) => {
  return <PText>{children}</PText>;
};

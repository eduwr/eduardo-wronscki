import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const Picture = styled.img`
  height: 30%;
  width: 50%;
`;

export const CardImg: React.FC<Props> = (props) => {
  return <Picture {...props} />;
};

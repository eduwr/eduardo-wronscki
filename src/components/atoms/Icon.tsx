import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const Picture = styled.img`
  height: 100px;
  width: 100px;
`;

export const Icon: React.FC<Props> = (props) => {
  return <Picture {...props} />;
};

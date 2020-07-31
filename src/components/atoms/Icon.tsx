import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  size?: 'small' | 'default';
}

const Picture = styled.img<Props>`
  height: ${(props) => (props.size === 'small' ? 50 : 100)}px;
  width: ${(props) => (props.size === 'small' ? 50 : 100)}px;
`;

export const Icon: React.FC<Props> = (props) => {
  return <Picture {...props} />;
};

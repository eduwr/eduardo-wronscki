import React from 'react';
import styled from 'styled-components';
import { Icon, Paragraph } from '../atoms';

interface Props {
  src: string;
  label: string;
  length?: number;
}

interface ContainerProps {
  length?: number;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px ${(props) => (props.length ? 50 / props.length : 15)}vw;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

export const Tech: React.FC<Props> = ({ src, label, length }) => {
  return (
    <Container length={length}>
      <Icon src={src} />
      <Paragraph color="darkBlue" style={{ marginTop: 10 }}>
        {label}
      </Paragraph>
    </Container>
  );
};

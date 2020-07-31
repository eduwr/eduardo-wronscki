import React from 'react';
import styled from 'styled-components';
import { Icon, Paragraph } from '../atoms';

interface Props {
  src: string;
  label: string;
}
const Container = styled.div``;

export const Tech: React.FC<Props> = ({ src, label }) => {
  return (
    <Container>
      <Icon src={src} />
      <Paragraph color="darkBlue" style={{ marginTop: 10 }}>
        {label}
      </Paragraph>
    </Container>
  );
};

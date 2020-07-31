import React from 'react';
import styled from 'styled-components';

import { PictureWithCircles } from '../molecules';
import { HeaderBackground, Title, Paragraph } from '../atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.cyan};
  font-size: 46px;
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderBackground />
      <Title>
        <Span>Olá!</Span> O meu nome é <Span>Eduardo.</Span>
      </Title>
      <PictureWithCircles />
      <Paragraph style={{ maxWidth: '80%' }}>
        Sou desenvolvedor web apaixonado por javascript e todo o seu
        ecossistema.
      </Paragraph>
    </Container>
  );
};

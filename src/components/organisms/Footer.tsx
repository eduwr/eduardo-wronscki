import React from 'react';
import styled from 'styled-components';

import { Resume, SocialMedias } from '../molecules';

const Container = styled.div`
  display: flex;
  height: 450px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.cyan};
  font-size: 46px;
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <Resume>
        Sou desenvolvedor web apaixonado por javascript e todo o seu
        ecossistema.
      </Resume>
      <SocialMedias />
    </Container>
  );
};

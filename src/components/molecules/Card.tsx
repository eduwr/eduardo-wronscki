import React from 'react';
import styled from 'styled-components';

import { Paragraph, SubHeading, CardImg } from '../atoms';

interface Props {
  src: string;
  title: string;
  paragraph: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
  height: 90%;
`;

export const Card: React.FC<Props> = ({ src, title, paragraph }) => {
  return (
    <Container>
      <CardImg src={src} />
      <SubHeading color="lightGrey" fontSize="medium">
        {title}
      </SubHeading>
      <Paragraph color="lightGreyTransparency" fontSize="small">
        {paragraph}
      </Paragraph>
    </Container>
  );
};

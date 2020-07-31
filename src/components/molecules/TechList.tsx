import React from 'react';
import styled from 'styled-components';

import { Tech } from '.';

type Tech = {
  id: number;
  icon: string;
  label: string;
};

interface Props {
  techs: Tech[];
}
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const TechList: React.FC<Props> = ({ techs }) => {
  return (
    <Container>
      {techs.map((tech) => {
        const { id, icon, label } = tech;
        return <Tech label={label} src={icon} key={id} />;
      })}
    </Container>
  );
};

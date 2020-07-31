import React from 'react';
import styled from 'styled-components';
import { TechList, Slider, Tech } from '../molecules';
import javascript from '../../assets/icons/javascript.svg';
import typescript from '../../assets/icons/typescript.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import react from '../../assets/icons/react.svg';
import reactnative from '../../assets/icons/reactnative.svg';
import sass from '../../assets/icons/sass.svg';
import git from '../../assets/icons/git.svg';

import { SubHeading } from '../atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 450px;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.lightGrey};
`;

const techsTop = [
  { id: 1, label: 'Javascript', icon: javascript },
  { id: 2, label: 'Typescript', icon: typescript },
  { id: 3, label: 'Node.js', icon: nodejs },
  { id: 4, label: 'React', icon: react },
];
const techsBottom = [
  { id: 5, label: 'ReactNative', icon: reactnative },
  { id: 6, label: 'Sass', icon: sass },
  { id: 7, label: 'Git', icon: git },
];

export const TechsSection: React.FC = () => {
  return (
    <Container>
      <SubHeading style={{ marginBottom: 20 }}>
        Principais Tecnologias
      </SubHeading>
      <Slider>
        {techsTop.map((tech, idx, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}
        {techsTop.map((tech, idx, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}
        {techsTop.map((tech, idx, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}
        {techsTop.map((tech, idx, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}
      </Slider>
      <Slider>
        {techsBottom.map((tech, id, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}

        {techsBottom.map((tech, id, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}

        {techsBottom.map((tech, id, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}

        {techsBottom.map((tech, id, arr) => (
          <Tech
            src={tech.icon}
            label={tech.label}
            key={tech.id}
            length={arr.length}
          />
        ))}
      </Slider>
    </Container>
  );
};
/*
<TechList techs={techs.filter((tech) => tech.id <= 4)} />
<TechList techs={techs.filter((tech) => tech.id > 4)} />
*/

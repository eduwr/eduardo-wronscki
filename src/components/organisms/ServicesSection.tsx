import React from 'react';
import styled from 'styled-components';
import appDev from '../../assets/svg/appDev.svg';
import webDev from '../../assets/svg/webDev.svg';
import systemDev from '../../assets/svg/systemDev.svg';
import { Card } from '../molecules';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 350px;
  background-color: ${(props) => props.theme.colors.darkPurple};
`;

const cardData = [
  {
    id: 1,
    image: webDev,
    title: 'Desenvolvimento de Websites',
    paragraph:
      'Sites bonitos e responsivos, desenvolvidos com tecnologias modernas e de fácil manutenção.',
  },
  {
    id: 2,
    image: appDev,
    title: 'Desenvolvimento de Aplicativos',
    paragraph:
      'Aplicativos para iOS e Android desenvolvidos com React Native. Duas plataformas, mesmo código.',
  },
  {
    id: 3,
    image: systemDev,
    title: 'Desenvolvimento de Sistemas',
    paragraph:
      'Sistemas inteligentes, seguros e automatizados. Mais agilidade, controle e produtividade no seu dia a dia.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Container>
      {cardData.map((item) => {
        const { id, image, paragraph, title } = item;
        return (
          <Card key={id} src={image} title={title} paragraph={paragraph} />
        );
      })}
    </Container>
  );
};

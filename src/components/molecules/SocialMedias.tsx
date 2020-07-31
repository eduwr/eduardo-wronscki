import React from 'react';
import styled from 'styled-components';
import { Icon, Paragraph, Link } from '../atoms';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import twitter from '../../assets/icons/twitter.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
  padding: 20px;
  margin-top: 50px;
  @media (max-width: ${(props) => props.theme.layoutDivisors.maxWidth}) {
    width: 100%;
  }
`;

const linkList = [
  {
    id: 1,
    icon: linkedin,
    uri: 'https://www.linkedin.com/in/eduardo-wronscki-ricardo-0633421b/',
  },
  {
    id: 2,
    icon: github,
    uri: 'https://github.com/eduwr',
  },
  {
    id: 3,
    icon: instagram,
    uri: 'https://www.instagram.com/eduwric/',
  },
  {
    id: 4,
    icon: twitter,
    uri: 'https://twitter.com/eduwric',
  },
];

export const SocialMedias: React.FC = () => {
  return (
    <Container>
      <Paragraph color="lightGrey" fontSize="small">
        Me siga nas redes sociais.
      </Paragraph>
      <Wrapper>
        {linkList.map((item) => {
          const { id, icon, uri } = item;

          return (
            <Link key={id} href={uri}>
              <Icon src={icon} size="small" />
            </Link>
          );
        })}
      </Wrapper>
    </Container>
  );
};

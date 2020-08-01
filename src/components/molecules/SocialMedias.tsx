import React from 'react';
import styled from 'styled-components';
import {
  Paragraph,
  GitHubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../atoms';

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

const Link = styled.a``;

export const SocialMedias: React.FC = () => {
  return (
    <Container>
      <Paragraph color="lightGrey" fontSize="small">
        Me siga nas redes sociais.
      </Paragraph>
      <Wrapper>
        <Link
          href="https://www.linkedin.com/in/eduardo-wronscki-ricardo-0633421b/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
        <Link href="https://github.com/eduwr" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="https://www.instagram.com/eduwric/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link href="https://twitter.com/eduwric" target="_blank">
          <TwitterIcon />
        </Link>
      </Wrapper>
    </Container>
  );
};

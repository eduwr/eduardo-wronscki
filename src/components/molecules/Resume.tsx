/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import resumeIcon from '../../assets/icons/resume.svg';

import { Icon, Paragraph, SubHeading, Link } from '../atoms';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.colors.lightGrey};
  height: 30%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Resume: React.FC = () => {
  return (
    <Container>
      <SubHeading color="lightGrey">Eduardo Wronscki</SubHeading>
      <Wrapper>
        <Link href={require('../../assets/documents/resume.pdf')}>
          <Icon src={resumeIcon} size="small" />
        </Link>
        <Paragraph color="lightGrey" fontSize="tiny">
          Currículo
        </Paragraph>
      </Wrapper>
    </Container>
  );
};

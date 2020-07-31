import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface Props {
  fontSize?: 'large' | 'big' | 'medium' | 'small' | 'tiny';
  color?:
    | 'darkBlue'
    | 'cyan'
    | 'darkPurple'
    | 'lightGrey'
    | 'lightGreyTransparency';
  style?: CSSProperties;
}

const HText = styled.h1<Props>`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.lightGrey};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.large};
  z-index: 10;
  text-align: center;
`;

export const Title: React.FC<Props> = (props) => {
  return <HText {...props} />;
};

const PText = styled.p<Props>`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.darkBlue};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.medium};
  text-align: center;
`;

export const Paragraph: React.FC<Props> = (props) => {
  return <PText {...props} />;
};

const Header2 = styled.h2<Props>`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.darkBlue};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.medium};
  text-align: center;
  z-index: 10;
`;

export const SubHeading: React.FC<Props> = (props) => {
  return <Header2 {...props} />;
};

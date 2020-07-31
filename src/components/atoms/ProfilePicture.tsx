import React from 'react';
import styled from 'styled-components';
import picture from '../../assets/images/profile-picture.jpeg';

const Picture = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 8px solid ${(props) => props.theme.colors.lightGrey};
  position: absolute;
  filter: ${(props) => props.theme.dropShadow.circles};
`;

export const ProfilePicture: React.FC = () => {
  return <Picture src={picture} />;
};

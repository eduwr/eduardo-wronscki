import React from 'react';
import { Circles, ProfilePicture } from '../atoms';

export const PictureWithCircles: React.FC = () => {
  return (
    <Circles>
      <ProfilePicture />
    </Circles>
  );
};

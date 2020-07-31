import React from 'react';

import styled from 'styled-components';

interface Props {
  href?: string;
  target?: string;
  download?: boolean;
}

const StyledLink = styled.a``;

export const Link: React.FC<Props> = (props) => {
  return <StyledLink {...props} />;
};

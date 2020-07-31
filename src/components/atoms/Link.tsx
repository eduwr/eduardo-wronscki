import React from 'react';

import styled from 'styled-components';

interface Props {
  href?: string;
}

const StyledLink = styled.a``;

export const Link: React.FC<Props> = (props) => {
  return <StyledLink {...props} />;
};

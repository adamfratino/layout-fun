import * as React from 'react';
import styled from 'styled-components';
import { smallBlock } from '../../helpers';
import { backgroundColorColophon, fontColor } from '../../themes/footer';

const Colophon = () => (
  <ColophonContainer>
    Colophon
  </ColophonContainer>
);

export default Colophon;

const ColophonContainer = styled.aside`
  ${smallBlock};
  background-color: ${backgroundColorColophon};
  color: ${fontColor};
  height: 60px;
`;

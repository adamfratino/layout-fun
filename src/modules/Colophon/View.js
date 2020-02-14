import * as React from 'react';
import styled from 'styled-components';
import { smallBlock } from '../../helpers';
import { backgroundColorColophon, fontColor } from '../../themes/footer';

const Colophon = () => (
  <ColophonContainer>
    Copyright 2020 All Rights Reserved; Not be me, though.
  </ColophonContainer>
);

export default Colophon;

const ColophonContainer = styled.aside`
  ${smallBlock};
  background-color: ${backgroundColorColophon};
  color: ${fontColor};
  font-size: 8px;
  height: 60px;
  padding: 20px;
`;

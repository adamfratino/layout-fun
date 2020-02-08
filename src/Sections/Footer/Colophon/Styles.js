import styled from 'styled-components';
import { darken } from 'polished';
import { smallBlock } from '../../../StyleHelpers';

export const ColophonContainer = styled.aside`
  ${smallBlock};
  color: white;
  height: 60px;
  background-color: ${darken('0.1', 'rgb(21, 67, 96)')};
`;

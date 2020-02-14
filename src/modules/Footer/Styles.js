import styled from 'styled-components';
import { smallBlock } from '../../helpers';
import { backgroundColor, fontColor } from '../../themes/footer';

export const FooterContainer = styled.footer`
  ${smallBlock};
  background-color: ${backgroundColor};
  box-shadow: 0 0 4rem -1rem black;
  color: ${fontColor};
  height: 500px;
  padding: 20px;
`;

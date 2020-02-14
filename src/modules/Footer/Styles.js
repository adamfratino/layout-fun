import styled from 'styled-components';
import { backgroundColor, fontColor } from '../../themes/footer';

export const FooterContainer = styled.footer`
  background-color: ${backgroundColor};
  box-shadow: 0 0 4rem -1rem black;
  color: ${fontColor};
  position: relative;
  z-index: 1;
`;

export const Main = styled.div`
  display: flex;
  padding: 60px 20px;
`;

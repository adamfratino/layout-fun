import styled from 'styled-components';
import { NAV_HEIGHT } from '../../StyleHelpers';

export const HeaderContainer = styled.header`
  position: sticky;
  top: -110px;
  box-shadow: 0 0 4rem -1rem black;
  z-index: 2;
  & + * { margin-top: -${NAV_HEIGHT}px; }
`;

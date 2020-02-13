import styled from 'styled-components';
import { smallBlock, NAV_HEIGHT } from '../../../StyleHelpers';

export const NavigationContainer = styled.nav`
  ${smallBlock};
  background-color: rgb(183, 28, 28);
  color: white;
  display: flex;
  height: ${NAV_HEIGHT}px;
  justify-content: space-between;
  padding: 20px;
`;

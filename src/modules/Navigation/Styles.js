import styled from 'styled-components';
import { smallBlock, NAV_HEIGHT } from '../../helpers';
import { backgroundColor, boxShadow, fontColor, backgroundColorCollapsed } from '../../themes/navigation';

export const NavigationContainer = styled.nav`
  ${smallBlock};
  background-color: ${backgroundColor};
  box-shadow: ${boxShadow};
  color: ${fontColor};
  display: flex;
  height: ${NAV_HEIGHT}px;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  transition: all 200ms ease;
  transition-delay: 100ms;

  .is-collapsed & {
    background-color: ${backgroundColorCollapsed};
    box-shadow: 0 0 4rem -1rem black;
  }
`;

import styled from 'styled-components';
import { NAV_HEIGHT } from '../../StyleHelpers';

export const HeaderContainer = styled.header`
  position: sticky;
  top: -110px;
  box-shadow: 0 0 4rem -1rem black;
  transition: all 250ms ease;
  z-index: 2;
  & + * { margin-top: -${NAV_HEIGHT}px; }

  &.is-collapsed {
    &:hover {
      transform: translate3d(0, ${NAV_HEIGHT - 10}px, 0);
    }
  }
`;

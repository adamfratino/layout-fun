import styled from 'styled-components';
import { PROMO_HEIGHT, NAV_HEIGHT } from '../../helpers';

export const HeaderContainer = styled.header`
  position: sticky;
  top: -${NAV_HEIGHT + PROMO_HEIGHT - 20}px;
  transition: all 250ms ease;
  z-index: 2;
  & + * { margin-top: -${NAV_HEIGHT}px; }

  &.is-collapsed {
    &:hover {
      transform: translate3d(0, ${NAV_HEIGHT - 20}px, 0);
    }
  }
`;

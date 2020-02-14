import styled from 'styled-components';
import { PROMO_HEIGHT, smallBlock } from '../../../helpers';
import { backgroundColor, fontColor, fontColorInverse } from '../../../themes/promo';

export const PromoContainer = styled.aside`
  ${smallBlock};
  background-color: ${backgroundColor};
  color: ${fontColor};
  height: ${PROMO_HEIGHT}px;
  justify-content: center;
  position: relative;

  span {
    color: ${fontColorInverse};
  }
`;

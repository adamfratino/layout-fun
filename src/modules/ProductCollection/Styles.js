import styled from 'styled-components';
import { smallBlock } from '../../helpers';
import { backgroundColor, borderColor, fontColor } from '../../themes/product-collection';

export const ProductCollectionContainer = styled.section`
  align-items: stretch;
  background-color: ${backgroundColor};
  display: flex;
  height: 250px;
  overflow: hidden;

  & > * {
    ${smallBlock};
    background-color: ${backgroundColor};
    color: ${fontColor};
    cursor: pointer;
    flex: 1;
    justify-content: center;
    padding-left: 0;
    transition: all 150ms ease;
    &:not(:last-of-type) {
      border-right: 1px solid ${borderColor};
    }

    &:hover {
      box-shadow: 0 0 2rem -1rem black;
      transform: scale(1.05);
      z-index: 1;
    }
  }
`

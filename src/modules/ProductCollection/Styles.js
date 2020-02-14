import styled from 'styled-components';
import { smallBlock } from '../../helpers';

export const ProductCollectionContainer = styled.section`
  height: 250px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  background-color: rgb(0, 0, 0);

  & > * {
    ${smallBlock};
    cursor: pointer;
    justify-content: center;
    padding-left: 0;
    flex: 1;
    background-color: rgb(199, 0, 57);
    transition: all 150ms ease;

    &:nth-of-type(2) { background-color: rgb(255, 87, 51); }
    &:nth-of-type(3) { background-color: rgb(255, 195, 0); }
    &:nth-of-type(4) { background-color: rgb(218, 247, 166); }
    &:nth-of-type(5) { background-color: rgb(20, 143, 119); }

    &:hover {
      box-shadow: 0 0 2rem -1rem black;
      transform: scale(1.05);
      z-index: 1;
    }
  }
`

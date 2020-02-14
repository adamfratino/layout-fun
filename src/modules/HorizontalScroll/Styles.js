import styled from 'styled-components';
import { smallBlock } from '../../helpers';

export const HorizontalScrollContainer = styled.section`
  overflow-x: scroll;
  height: calc(100vh - 40px);
  width: 100vw;
  align-items: stretch;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerContainer = styled.div`
  width: calc(${props => props.theme.count * 100}vw - ${props => props.theme.count * 10}px);
  height: 100%;
  align-items: stretch;
  display: flex;

  & > div {
    scroll-snap-align: start;
    ${smallBlock};
    background-color: rgb(174, 214, 241);
    flex: 1;
    &:nth-of-type(2) { background-color: rgb(93, 173, 226); }
    &:nth-of-type(3) { background-color: rgb(46, 134, 193); }
    &:nth-of-type(4) { background-color: rgb(33, 97, 140); }
  }
`;

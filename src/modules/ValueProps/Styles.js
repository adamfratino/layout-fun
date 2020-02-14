import styled from 'styled-components';
import { smallBlock } from '../../StyleHelpers';

export const ValuePropsContainer = styled.section`
  height: 175px;
  display: flex;
  align-items: stretch;

  & > * {
    ${smallBlock};
    justify-content: center;
    padding: 20px;
    flex: 1;
    background-color: rgb(100, 181, 246);
    &:nth-of-type(2) { background-color: rgb(30, 136, 229); }
    &:nth-of-type(3) { background-color: rgb(21, 101, 192); }

    h2 {
      font-size: 16px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    p {
      font-size: 14px;
      line-height: 1.35;
    }
  }
`

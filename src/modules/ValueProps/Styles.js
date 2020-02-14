import styled from 'styled-components';
import { smallBlock } from '../../helpers';
import { backgroundColor, borderColor, fontColor } from '../../themes/value-props';

export const ValuePropsContainer = styled.section`
  height: 175px;
  display: flex;
  align-items: stretch;

  & > * {
    ${smallBlock};
    background-color: ${backgroundColor};
    border-bottom: 1px solid ${borderColor};
    border-top: 1px solid ${borderColor};
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    &:not(:last-of-type) {
      border-right: 1px solid ${borderColor};
    }

    h2 {
      color: ${fontColor};
      font-size: 16px;
      margin-bottom: 15px;
      text-align: center;
      text-transform: uppercase;
    }

    p {
      color: ${fontColor};
      font-size: 12px;
      line-height: 1.5;
      max-width: 360px;
      text-align: center;
    }
  }
`

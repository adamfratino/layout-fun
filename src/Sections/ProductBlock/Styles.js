import styled from 'styled-components';
import { darken } from 'polished';
import { p, h2, cta } from '../../StyleHelpers';

export const ProductBlockContainer = styled.section`
  display: flex;
  flex-direction: ${props => props.theme.reverse ? 'row-reverse' : 'row'};
  align-items: stretch;
  height: 90vh;

  & > * {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${props => props.theme.reverse ? `rgb(40, 180, 99)` : `${darken('0.1', 'rgb(40, 180, 99)')}`};

    &:nth-of-type(2) {
      flex: 3;
      background-color: ${props => props.theme.reverse ? `rgb(88, 214, 141)` : `${darken('0.1', 'rgb(88, 214, 141)')}`};
    }

    & > div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      color: white;
      height: 80%;
      width: 50%;
      background-color: ${props => props.theme.reverse ? `rgb(20, 90, 50)` : `${darken('0.1', 'rgb(20, 90, 50)')}`};
    }
  }

  h1 {
    ${h2};
    margin-bottom: 40px;
  }

  p {
    ${p};
    margin-bottom: 40px;
  }

  small {
    max-width: 90%;
  }
`;

export const Cta = styled.span`
  ${cta};
  margin-bottom: 40px;
`

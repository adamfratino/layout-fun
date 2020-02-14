import styled from 'styled-components';
import { p, h2, cta } from '../../helpers';
import { backgroundColor, backgroundColorMedia, fontColor } from '../../themes/product-block';

export const ProductBlockContainer = styled.section`
  display: flex;
  flex-direction: ${props => props.theme.reverse ? 'row-reverse' : 'row'};
  align-items: stretch;
  height: calc(100vh - 20px);

  h1 {
    ${h2};
    color: ${fontColor};
    margin-bottom: 40px;
  }

  p {
    ${p};
    color: ${fontColor};
    margin-bottom: 40px;
  }

  small {
    color: ${fontColor};
    max-width: 90%;
  }
`;

export const CopyContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${backgroundColor};

  & > div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    color: white;
    height: 80%;
    width: 100%;
    max-width: 350px;
  }
`;

export const MediaContainer = styled.div`
  background-color: ${backgroundColorMedia};
  box-shadow: 0 20px 40px -10px black inset;
  flex: 3;
`;

export const Cta = styled.span`
  ${cta};
  margin-bottom: 40px;
`

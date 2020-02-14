import styled from 'styled-components';
import { h1, h4 } from '../../helpers';
import { backgroundColor, fontColor } from '../../themes/hero';

export const HeroContainer = styled.section`
  align-items: center;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  justify-content: center;
  padding: 40px;
  text-align: center;

  h1 {
    ${h1};
    color: ${fontColor};
    max-width: 840px;
    margin-bottom: 40px;
  }

  h2 {
    ${h4};
    color: ${fontColor};
    margin: 0;
    max-width: 500px;
  }
`

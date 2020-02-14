import styled from 'styled-components';
import { h1, h4 } from '../../helpers';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgb(255, 248, 225);
  padding: 40px;
  height: calc(100vh - 80px);

  h1 {
    ${h1};
    max-width: 840px;
    margin-bottom: 40px;
  }

  h2 {
    ${h4};
    margin: 0;    
    max-width: 500px;
  }
`

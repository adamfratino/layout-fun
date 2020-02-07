import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgb(255, 248, 225);
  padding: 40px;
  height: calc(100vh - 160px);

  h1 {
    font-size: 86px;
    line-height: 0.95;
    max-width: 720px;
    margin: 0 0 30px;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    max-width: 500px;
    line-height: 1.4;
  }
`

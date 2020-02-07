import * as React from "react";
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';
import {
  Header,
  Promo,
  Navigation,
  Hero,
  ProductCollection,
  ProductBlock,
  ValueProps,
  Footer,
} from './Sections';

const App = () => (
  <>
    <Normalize />
    <Main>
      <Header>
        <Promo />
        <Navigation />
      </Header>
      <Hero />
      <ProductCollection count={5}/>
      <ProductBlock />
      <ProductBlock reverse />
      <ValueProps count={3} />
      <Footer />
    </Main>
  </>
);

export default App;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-padding: 20px;
  scroll-snap-type: y proximity;
  font-family: Helvetica, Arial, sans-serif;

  & > * {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Colophon } from '../Colophon';
import { FooterContainer, Main } from './Styles';
import { Sitemap } from './components/Sitemap';
import { Contact } from './components/Contact';

const Footer = () => (
  <ThemeProvider theme={{mode: 'light'}}>
    <FooterContainer>
      <Main>
        <Sitemap count={4} />
        <Contact />
      </Main>
      <Colophon />
    </FooterContainer>
  </ThemeProvider>
);

export default Footer;

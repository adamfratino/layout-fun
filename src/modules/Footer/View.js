import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Colophon } from '../Colophon';
import { FooterContainer } from './Styles';

const Footer = () => (
  <ThemeProvider theme={{mode: 'light'}}>
    <FooterContainer>
      <div></div>
      <Colophon />
    </FooterContainer>
  </ThemeProvider>
);

export default Footer;

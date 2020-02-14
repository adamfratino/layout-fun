import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { PromoContainer }  from './Styles';

const Promo = () => (
  <ThemeProvider theme={{ mode: 'primary' }}>
    <PromoContainer>
      <span>This is the promotion we'll use to sell all our products!</span>
    </PromoContainer>
  </ThemeProvider>
);

export default Promo;

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { PromoContainer }  from './Styles';

const Promo = () => (
  <ThemeProvider theme={{ mode: 'primary' }}>
    <PromoContainer>
      <p>This is the promotion we'll <span>use to sell</span> all our products!</p>
    </PromoContainer>
  </ThemeProvider>
);

export default Promo;

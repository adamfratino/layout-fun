import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { promo } from '../../themes/active-themes';
import { PromoContainer } from './Styles';

const Promo = () => (
  <ThemeProvider theme={{ mode: promo }}>
    <PromoContainer>
      <p>This is the promotion we'll <span>use to sell</span> all our products!</p>
    </PromoContainer>
  </ThemeProvider>
);

export default Promo;

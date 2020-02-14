import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { productBlock } from '../../themes/active-themes';
import { ProductBlockContainer, CopyContainer, MediaContainer, Cta } from './Styles';

const ProductBlock = ({ reverse }) => (
  <ThemeProvider theme={{ mode: productBlock, reverse: reverse }}>
    <ProductBlockContainer>
      <CopyContainer>
        <div>
          <h1>Product Block</h1>
          <p>The corruption of the American soul is consumerism.</p>
          <Cta>Buy Now</Cta>
          <small>Don't worry, you can return your purchase within 30 days if you're not satisfied.</small>
        </div>
      </CopyContainer>
      <MediaContainer />
    </ProductBlockContainer>
  </ThemeProvider>
);

export default ProductBlock;

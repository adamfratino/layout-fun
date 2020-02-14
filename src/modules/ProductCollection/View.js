import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { productCollection } from '../../themes/active-themes';
import { ProductCollectionContainer } from './Styles';

const ProductCollection = ({ count }) => (
  <ThemeProvider theme={{ mode: productCollection }}>
    <ProductCollectionContainer>
      {[...Array(count)].map((el, i) => <div key={i}>ProductCollection</div>)}
    </ProductCollectionContainer>
  </ThemeProvider>
);

export default ProductCollection;

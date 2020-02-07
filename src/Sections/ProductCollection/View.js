import * as React from 'react';
import { ProductCollectionContainer } from './Styles';

const ProductCollection = ({ count }) => (
  <ProductCollectionContainer>
    {[...Array(count)].map(el => <div>Product Collection</div>)}
  </ProductCollectionContainer>
);

export default ProductCollection;

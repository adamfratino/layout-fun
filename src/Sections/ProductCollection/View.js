import * as React from 'react';
import { ProductCollectionContainer } from './Styles';

const ProductCollection = ({ count }) => (
  <ProductCollectionContainer>
    {[...Array(count)].map((el, i) => <div key={i}>Product Collection</div>)}
  </ProductCollectionContainer>
);

export default ProductCollection;

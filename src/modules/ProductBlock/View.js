import * as React from 'react';
import { ProductBlockContainer, Cta } from './Styles';

const ProductBlock = ({ reverse }) => (
  <ProductBlockContainer theme={{reverse: reverse }}>
    <div>
      <div>
        <h1>Product Block</h1>
        <p>The corruption of the American soul is consumerism.</p>
        <Cta>Buy Now</Cta>
        <small>Don't worry, you can return your purchase within 30 days if you're not satisfied.</small>
      </div>
    </div>
    <div />
  </ProductBlockContainer>
);

export default ProductBlock;

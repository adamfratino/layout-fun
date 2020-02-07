import * as React from 'react';
import { ProductBlockContainer } from './Styles';

const ProductBlock = ({ reverse }) => (
  <ProductBlockContainer theme={{reverse: reverse }}>
    <div>
      <div>Product Block</div>
    </div>
    <div />
  </ProductBlockContainer>
);

export default ProductBlock;

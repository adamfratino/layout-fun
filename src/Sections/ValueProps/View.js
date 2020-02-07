import * as React from 'react';
import { ValuePropsContainer } from './Styles';

const ValueProps = ({ count }) => (
  <ValuePropsContainer>
    {[...Array(count)].map(el => <div>Value Proposition</div>)}
  </ValuePropsContainer>
);

export default ValueProps;

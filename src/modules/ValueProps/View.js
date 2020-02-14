import * as React from 'react';
import { ValuePropsContainer } from './Styles';

const ValueProps = ({ count }) => (
  <ValuePropsContainer>
    {[...Array(count)].map((el, i) => <div key={i}>Value Proposition</div>)}
  </ValuePropsContainer>
);

export default ValueProps;

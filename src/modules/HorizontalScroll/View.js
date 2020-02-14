import * as React from 'react';
import { HorizontalScrollContainer, InnerContainer } from './Styles';

const HorizontalScroll = ({ count }) => (
  <HorizontalScrollContainer>
    <InnerContainer theme={{count: count}}>
      {[...Array(count)].map((el, i) => <div key={i}>Horizontal Scroll</div>)}
    </InnerContainer>
  </HorizontalScrollContainer>
);

export default HorizontalScroll;

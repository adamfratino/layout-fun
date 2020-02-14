import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ValuePropsContainer } from './Styles';

const ValueProps = ({ count }) => (
  <ThemeProvider theme={{mode: 'dark' }}>
    <ValuePropsContainer>
      {[...Array(count)].map((el, i) => (
      <div key={i}>
        <h2>lorem ipsim solar</h2>
        <p>lorem ipsum letters don't matter it's just blocks anyway, same with capitalization and punctuation</p>
      </div>
    ))}
    </ValuePropsContainer>
  </ThemeProvider>
);

export default ValueProps;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from './Styles';
import { Hamburger } from './Components';

const Navigation = () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <NavigationContainer>
      <p>Navigation</p>
      <Hamburger />
    </NavigationContainer>
  </ThemeProvider>
);

export default Navigation;

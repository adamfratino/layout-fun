import React from 'react';
import { ThemeProvider } from 'styled-components';
import { navigation } from '../../themes/active-themes';
import { NavigationContainer } from './Styles';
import { Links, Hamburger } from './components';

const Navigation = () => (
  <ThemeProvider theme={{ mode: navigation }}>
    <NavigationContainer>
      <p>Navigation</p>
      <Links />
      <Hamburger />
    </NavigationContainer>
  </ThemeProvider>
);

export default Navigation;

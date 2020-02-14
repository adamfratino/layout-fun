import React from 'react';
import { NavigationContainer } from './Styles';
import { Hamburger } from './Components';

const Navigation = () => {
  return (
    <NavigationContainer>
      <p>Navigation</p>
      <Hamburger />
    </NavigationContainer>
  );
};

export default Navigation;

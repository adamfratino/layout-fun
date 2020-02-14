import * as React from 'react';
import { Promo } from '../Promo';
import { Navigation } from '../Navigation';
import { HeaderContainer } from './Styles';

const Header = ({ position }) => (
  <HeaderContainer className={position > 50 ? 'is-collapsed' : undefined}>
    <Promo />
    <Navigation />
  </HeaderContainer>
);

export default Header;

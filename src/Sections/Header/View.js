import * as React from 'react';
import { HeaderContainer } from './Styles';

const Header = ({ position, children }) => (
  <HeaderContainer className={position > 50 ? 'is-collapsed' : undefined}>
    {children}
  </HeaderContainer>
);

export default Header;

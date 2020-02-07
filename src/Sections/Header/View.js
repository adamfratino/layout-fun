import * as React from 'react';
import { HeaderContainer } from './Styles';

const Header = ({ children }) => (
  <HeaderContainer>
    {children}
  </HeaderContainer>
);

export default Header;

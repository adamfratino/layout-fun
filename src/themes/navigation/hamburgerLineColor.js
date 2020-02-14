import theme from 'styled-theming';
import { black, white } from '../colors';

export const hamburgerLineColor = theme('mode', {
  light: black,
  dark: white,
  transparent: black,
});

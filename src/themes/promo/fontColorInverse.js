import theme from 'styled-theming';
import { black, white, red } from '../colors';

export const fontColorInverse = theme('mode', {
  light: red,
  dark: black,
  primary: white,
});

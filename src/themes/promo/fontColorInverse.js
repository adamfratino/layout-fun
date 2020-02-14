import theme from 'styled-theming';
import { white, red } from '../colors';

export const fontColorInverse = theme('mode', {
  light: red,
  dark: red,
  primary: white,
});

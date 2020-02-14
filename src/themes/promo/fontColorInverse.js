import theme from 'styled-theming';
import { black, white } from '../colors';

export const fontColorInverse = theme('mode', {
  light: white,
  dark: black,
  primary: white,
});

import theme from 'styled-theming';
import { black, red, lightGrey } from '../colors';

export const backgroundColorColophon = theme('mode', {
  light: lightGrey,
  dark: black,
  primary: red,
});

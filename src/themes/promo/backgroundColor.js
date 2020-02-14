import theme from 'styled-theming';
import { black, white, red } from '../colors';

export const backgroundColor = theme('mode', {
  light: white,
  dark: black,
  primary: red,
});

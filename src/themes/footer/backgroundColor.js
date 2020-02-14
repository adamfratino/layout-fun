import theme from 'styled-theming';
import { black, red, white } from '../colors';

export const backgroundColor = theme('mode', {
  light: white,
  dark: black,
  primary: red,
});

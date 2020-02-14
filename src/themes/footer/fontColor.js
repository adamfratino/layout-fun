import theme from 'styled-theming';
import { black, white } from '../colors';

export const fontColor = theme('mode', {
  light: black,
  dark: white,
  primary: black,
});

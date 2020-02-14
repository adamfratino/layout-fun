import theme from 'styled-theming';
import { black, white } from '../colors';

export const backgroundColor = theme('mode', {
  light: white,
  dark: black,
});

import theme from 'styled-theming';
import { black, white } from '../colors';

export const backgroundColorCollapsed = theme('mode', {
  light: white,
  dark: black,
  transparentLight: black,
  transparentDark: white,
});

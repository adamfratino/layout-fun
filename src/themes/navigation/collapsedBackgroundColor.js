import theme from 'styled-theming';
import { black, white } from '../colors';

export const collapsedBackgroundColor = theme('mode', {
  light: white,
  dark: black,
  transparent: black,
});

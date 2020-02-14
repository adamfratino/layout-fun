import theme from 'styled-theming';
import { red } from '../colors';

export const backgroundColorMedia = theme('mode', {
  light: red,
  dark: red,
});

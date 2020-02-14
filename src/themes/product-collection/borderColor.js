import theme from 'styled-theming';
import {trueBlack, trueWhite } from '../colors';

export const borderColor = theme('mode', {
  light: trueWhite,
  dark: trueBlack,
});

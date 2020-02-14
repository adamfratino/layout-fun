import theme from 'styled-theming';
import { grey } from '@material-ui/core/colors';

export const fontColor = theme('mode', {
  light: grey[900],
  dark: grey[50],
  transparent: grey[900],
});

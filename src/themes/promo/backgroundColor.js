import theme from 'styled-theming';
import { grey, red } from '@material-ui/core/colors';

export const backgroundColor = theme('mode', {
  light: grey[50],
  dark: grey[900],
  primary: red[500],
});

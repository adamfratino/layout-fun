import theme from 'styled-theming';
import { grey } from '@material-ui/core/colors';

export const backgroundColor = theme('mode', {
  light: grey[50],
  dark: grey[900],
  transparent: 'transparent',
});

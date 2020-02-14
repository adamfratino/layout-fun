import theme from 'styled-theming';

export const boxShadow = theme('mode', {
  light: `0 0 4rem -1rem black`,
  dark: `0 0 4rem -1rem black`,
  transparent: `none`,
});

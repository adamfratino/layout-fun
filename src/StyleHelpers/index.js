import { css } from 'styled-components';
import { darken } from 'polished';

export const NAV_HEIGHT = 60;

export const smallBlock = css`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;

export const h1 = css`
  font-size: 64px;
`;

export const h2 = css`
  font-size: 36px;
`

export const h3 = css`
  font-size: 24px;
`

export const h4 = css`
  font-size: 18px;
`

export const p = css`
  font-size: 14px;
`

export const cta = css`
  cursor: pointer;
  display: inline-block;
  padding: 15px;
  text-align: center;
  min-width: 200px;
  background-color: rgb(255, 69, 0);
  color: black;
  transition: all 200ms ease;

  &:hover {
    background-color: ${darken(0.05, 'rgb(255, 69, 0)')}
  }
`

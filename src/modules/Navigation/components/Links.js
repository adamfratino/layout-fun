import React from 'react';
import styled from 'styled-components';
import { hoverLineColor } from '../../../themes/navigation';

export const Links = () => (
  <LinksContainer>
    <Link>Charles</Link>
    <Link>Bronson</Link>
    <Link>Fan</Link>
    <Link>Club</Link>
  </LinksContainer>
);

const LinksContainer = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
`;

const Link = styled.li`
  cursor: pointer;
  display: flex;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: calc(100% + 5px);
    height: 3px;
    left: 0;
    margin: auto;
    right: 0;
    width: 100%;
    max-width: 0;
    background-color: transparent;
    transition: all 300ms ease;
  }

  &:not(:last-of-type) {
    margin-right: 40px;
  }

  &:hover {
    &::after {
      background-color: ${hoverLineColor};
      max-width: 100%;
    }
  }
`;

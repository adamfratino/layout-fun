import React, { useState } from 'react';
import styled from 'styled-components';
import { hamburgerLineColor } from '../../../../themes/navigation';

const Hamburger = () => {
  const [isFlyoutOpen, toggleFlyout] = useState(false);

  const handler = () => toggleFlyout(!isFlyoutOpen);

  return (
    <Container
      onClick={handler}
      className={isFlyoutOpen ? 'is-active' : undefined}
    >
      <Line />
      <Line />
      <Line />
    </Container>
  );
};

export default Hamburger;

const CONTAINER_HEIGHT = 20;
const CONTAINER_WIDTH = CONTAINER_HEIGHT * 1.25;
const LINE_HEIGHT = CONTAINER_HEIGHT / 5;
const TRANSITION_TIME = 250;

const Container = styled.div`
  cursor: pointer;
  display: inline-block;
  height: ${CONTAINER_HEIGHT}px;
  position: relative;
  transition: transform 200ms ease;
  width: ${CONTAINER_WIDTH}px;

  &.is-active {
    span {
      &:first-of-type,
      &:last-of-type {
        margin-top: -${LINE_HEIGHT / 2}px; 
        opacity: 0;
        top: 50%;
      }
      &:nth-of-type(2) {
        transform: rotate(45deg);
        transform-origin: 50% 50%;
        &::after { transform: rotate(-90deg); }
      }
    }
  }
`;

const Line = styled.span`
  background-color: ${hamburgerLineColor};
  display: inline-block;
  height: ${LINE_HEIGHT}px;
  position: absolute;
  transition: all ${TRANSITION_TIME}ms ease;
  width: ${CONTAINER_WIDTH}px;

  &:first-of-type { top: 0; }

  &:last-of-type {
    top: calc(100% - ${LINE_HEIGHT}px);
  }

  &:nth-of-type(2) {
    top: 50%;
    margin-top: -${LINE_HEIGHT / 2}px;

    &::after {
      background-color: ${hamburgerLineColor};
      content: "";
      display: inline-block;
      height: ${LINE_HEIGHT}px;
      position: absolute;
      transition-delay: ${TRANSITION_TIME}ms;
      transition: all ${TRANSITION_TIME}ms ease;
      width: ${CONTAINER_WIDTH}px;
    }
  }
`;

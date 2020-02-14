import React from 'react';
import styled from 'styled-components';

export const Contact = () => (
  <ContactContainer>
    <h2>Lorem ipsum dolor</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <input type="text" />
  </ContactContainer>
);

const ContactContainer = styled.div`
  width: 360px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
`;

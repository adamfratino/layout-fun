import React from 'react';
import styled from 'styled-components';

export const Sitemap = ({ count }) => (
  <SitemapContainer>
    {[...Array(count)].map((el, i) => (
      <Column key={i}>
        <h2>This is TITLE</h2>
        <ul key={i}>
          <li>test</li>
          <li>testtest test</li>
          <li>test afff eae</li>
          <li>testeafaf wafawf</li>
        </ul>
      </Column>
    ))}
  </SitemapContainer>
);

const SitemapContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Column = styled.div`
  flex: 1;
  max-width: 350px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  li {
    font-size: 14px;
    
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;

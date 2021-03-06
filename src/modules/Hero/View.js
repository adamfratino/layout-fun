import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { hero } from '../../themes/active-themes';
import { HeroContainer } from './Styles';

const Hero = () => (
  <ThemeProvider theme={{ mode: hero }}>
    <HeroContainer>
      <h1>Heroes are a Social Construct</h1>
      <h2>God will not have his work made manifest by cowards. Always, always, always, always, always do what you are afraid to do. Do the thing you fear and the death of fear is certain.</h2>
    </HeroContainer>
  </ThemeProvider>
);

export default Hero;

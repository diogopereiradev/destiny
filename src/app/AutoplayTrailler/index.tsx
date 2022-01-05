import React from 'react';
import {
  Container, 
  BluredVideoContainer,
  Video,
  PlayButton
} from './styles';

function AutoplayTrailler (): JSX.Element {
  return (
    <Container>
      <BluredVideoContainer>
        <PlayButton onClick={() => window.open('https://www.youtube.com/watch?v=Sal5NXCPv14', '_blank')} />
      </BluredVideoContainer>
      <Video width="640" height="360" src="https://www.youtube.com/embed/Sal5NXCPv14?loop=1&playlist=Sal5NXCPv14&controls=0&autoplay=1&mute=1&showinfo=0&playsinline=1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
    </Container>
  );
}
export default AutoplayTrailler;
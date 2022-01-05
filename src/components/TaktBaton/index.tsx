import React from 'react';
import {
  Container,
  Petal,
  RoseContainer,
  GoldPartOne,
  BlackPart,
  GoldPartTwo,
  FullCable
} from './styles';

function Rose (): JSX.Element {
  return (
    <RoseContainer>
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
    </RoseContainer>
  );
}

export default function TaktBaton (): JSX.Element {
  return (
    <Container>
      <Rose />
      <GoldPartOne />
      <BlackPart />
      <GoldPartTwo />
      <FullCable />
    </Container> 
  );
}
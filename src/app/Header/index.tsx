import './types';
import React from 'react';
import { 
  CharacterDestiny, 
  CharacterTakt, 
  CharactersContainer, 
  InfosContainer, 
  InfosTextContainer, 
  ReadMoreButton,
  Container, 
  OfficialLogo, 
  Sun,
  LeftRuins,
  RightRuins
} from './styles';
import PetalRain from '../../components/PetalRain/index';
import Clouds from '../../components/Clouds/index';

import flyingDestiny from '../../assets/images/flying-destiny.png';
import flyingTakt from '../../assets/images/flying-takt.png';
import officialLogo from '../../assets/images/taktopdestinylogo.png';
import leftRuins from '../../assets/images/left-ruins.png';
import rightRuins from '../../assets/images/right-ruins.png';

function Header (): JSX.Element {
  return (
    <Container>
      <PetalRain amount={6}/>
      <Clouds amount={4}/>
      <Sun/>
      <LeftRuins src={leftRuins} alt="left-ruins-image" />
      <RightRuins src={rightRuins} alt="right-ruins-image" />
      <CharactersContainer>
        <CharacterTakt src={flyingTakt} alt='Flying-Destiny-Character-Image'/>
        <CharacterDestiny src={flyingDestiny} alt='Flying-Destiny-Character-Image'/>
      </CharactersContainer>
      <InfosContainer>
        <OfficialLogo src={officialLogo} alt="Takt-op-Destiny-Official-Logo"/>
        <InfosTextContainer>
          Takt op destiny is an anime premiered on 10/05/2021, the production 
          has the involvement of Bandai Namco and DeNa, and the studios that 
          are developing the anime are MAPPA and Madhouse. And currently has 
          12 episodes and 1 season.
        </InfosTextContainer>
        <ReadMoreButton>See more</ReadMoreButton>
      </InfosContainer>
    </Container>
  );
}
export default Header;
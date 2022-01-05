import './styles';
import React from 'react';
import {
  Container,
  InfosContainer,
  SectionTitle,
  CharacterContainer,
  Character,
  AnimeAllInfosContainer,
  AnimeTrailer
} from './styles';
import Synopsis from './synopsis';
import AnimeInfos from './infos';
import AnimeRating from './rating';
import CharactersItems from './characters';

import Destiny from '../../assets/images/destiny.png';

function AnimeInfosSection (): JSX.Element {
  return (
    <Container>
      <InfosContainer>
        <SectionTitle>Anime Infos</SectionTitle>
        <AnimeAllInfosContainer>
          <AnimeInfos />
          <AnimeRating />
          <AnimeTrailer src="https://www.youtube.com/embed/Mb0k1HLm3Ls" allowFullScreen></AnimeTrailer>
        </AnimeAllInfosContainer>
        <SectionTitle>Synopsis</SectionTitle>
        <Synopsis />
        <SectionTitle>Characters</SectionTitle>
        <CharactersItems />
      </InfosContainer>
      <CharacterContainer>
        <Character src={Destiny} alt="anime-infos-section-character-image"/>
      </CharacterContainer>
    </Container>
  );
}
export default AnimeInfosSection;
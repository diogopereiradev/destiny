import React from 'react';
import {
  AnimeInfosContainer,
  InfosMessageContainer,
  InfosMessageValue,
  InfosMessageResponse
} from './styles';

function AnimeInfos (): JSX.Element {
  return (
    <AnimeInfosContainer>
      <InfosMessageContainer>
        <InfosMessageValue>Type:</InfosMessageValue>
        <InfosMessageResponse>TV</InfosMessageResponse>
      </InfosMessageContainer>
      
      <InfosMessageContainer>
        <InfosMessageValue>Status:</InfosMessageValue>
        <InfosMessageResponse>Finished</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Episodes:</InfosMessageValue>
        <InfosMessageResponse>12</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Aired:</InfosMessageValue>
        <InfosMessageResponse>06/10/2021</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Genres:</InfosMessageValue>
        <InfosMessageResponse>Action, Fantasy</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Producers:</InfosMessageValue>
        <InfosMessageResponse>Bandai Namco</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Studios:</InfosMessageValue>
        <InfosMessageResponse>MAPPA</InfosMessageResponse>
      </InfosMessageContainer>
    </AnimeInfosContainer>
  );
}
export default AnimeInfos;
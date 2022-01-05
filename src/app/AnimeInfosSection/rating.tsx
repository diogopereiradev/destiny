import React from 'react';
import {
  AnimeRatingContainer,
  InfosMessageContainer,
  InfosMessageValue,
  InfosMessageResponse
} from './styles';

function AnimeRating (): JSX.Element {
  return (
    <AnimeRatingContainer>
      <InfosMessageContainer>
        <InfosMessageValue>Score:</InfosMessageValue>
        <InfosMessageResponse>7.26</InfosMessageResponse>
      </InfosMessageContainer>
      
      <InfosMessageContainer>
        <InfosMessageValue>Ranked:</InfosMessageValue>
        <InfosMessageResponse>#2637</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Popularity:</InfosMessageValue>
        <InfosMessageResponse>#523</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Members:</InfosMessageValue>
        <InfosMessageResponse>320,203,535</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Favorites:</InfosMessageValue>
        <InfosMessageResponse>26,245,425</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Watched:</InfosMessageValue>
        <InfosMessageResponse>76,343,645</InfosMessageResponse>
      </InfosMessageContainer>

      <InfosMessageContainer>
        <InfosMessageValue>Incomplete:</InfosMessageValue>
        <InfosMessageResponse>6,323,435</InfosMessageResponse>
      </InfosMessageContainer>
    </AnimeRatingContainer>
  );
}
export default AnimeRating;
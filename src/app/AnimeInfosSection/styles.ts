import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 700px;
  padding: 5%;
  padding-top: 100px;
  padding-bottom: 70px;
  background-color: #beedf4dd;
  margin-top: -10px;
`;

export const InfosContainer = styled.div`
  width: 70%;

  @media screen and (max-width: 1000px) {width: 100%;}
`;

export const SectionTitle = styled.h2`
  font-family: Nunito;
  font-weight: 900;
  font-size: 35px;
  color: #19373add;
`;

export const AnimeAllInfosContainer = styled.div`
  width: 100%;
  min-height: 100px;
  max-height: 350px;
  overflow: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  padding-bottom: 20px;
`;

export const AnimeInfosContainer = styled.div`
  max-width: 200px;
  min-width: 200px;
  max-height: 350px;
  margin-right: 20px;
`;

export const AnimeRatingContainer = styled.div`
  max-width: 200px;
  min-width: 200px;
  max-height: 350px;
`;

export const AnimeTrailer = styled.iframe`
  width: 480px;
  height: 270px;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const InfosMessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #9bc5cbdd;
  border-radius: 10px;
  margin-top: 7px;
`;

export const InfosMessageValue = styled.p`
  font-family: monospace;
  font-weight: 900;
  font-size: 14px;
  color: #19373add;
`;

export const InfosMessageResponse = styled.p`
  font-family: monospace;
  font-weight: 10;
  font-size: 13px;
  color: #19373add;
`;

export const SynopsisContainer = styled.div`
  max-width: 1150px;
  min-height: 300px;
  padding: 20px;
`;

export const SynopsisText = styled.p`
  word-break: break-all;
  font-family: Nunito, sans-serif;
  font-weight: 10;
  font-size: 17px;
  letter-spacing: 1px;
  color: #19373add;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {font-size: 15px;}
`;

export const CardsContainer = styled.div`
  display: flex;
  overflow: auto;
  gap: 30px;
  width: 100%;
  margin-top: 30px;
  padding: 15px;
  white-space: nowrap;
  transition: all 0.1s;
  transform: scale(0.98);
  will-change: transform;
  user-select: none;
  cursor: pointer;

  &:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;

export const Card = styled.div`
  min-width: 220px;
  max-width: 250px;
  min-height: 220px;
  background-color: #9bc5cbdd;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 10px;
`;

export const CardCharacterImage = styled.img`
  width: 130px;
  height: 140px;
  object-position: 0px -10px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 13px;
  border: 1px solid #19373add;
`;

export const CardCharacterName = styled.p`
  font-family: Nunito;
  font-weight: 900;
  font-size: 18px;
  color: #19373add;
`;

export const CardCharacterFunction = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 13px;
  color: #19373add;
`;

export const CharacterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  @media screen and (max-width: 1000px) {display: none;}
`;

export const Character = styled.img`
  width: 300px;
  object-fit: contain;
`;
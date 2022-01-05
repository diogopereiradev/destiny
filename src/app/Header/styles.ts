import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 1000px;
  min-height: 600px;
  background: rgb(0,146,255);
  background: linear-gradient(180deg, rgba(0,146,255,1) 55%, rgba(0,176,255,1) 89%, rgba(0,176,255,1) 95%);
  overflow: hidden;

  @media screen and (max-width: 950px) {justify-content: center;}
`;

export const Sun = styled.div`
  position: absolute;
  right: 50%;
  top: 20px;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-right: -100px;
  background-color: #fff396;
  filter: blur(20px);
  z-index: -1;

  @media screen and (max-width: 950px) {
    right: 0px;
    top: -75px;
  }
`;

export const LeftRuins = styled.img`
  width: 300px;
  position: absolute;
  left: 0;
  bottom: 0;
  object-fit: cover;

  @media screen and (max-width: 950px) {width: 200px;}
`;

export const RightRuins = styled.img`
  width: 240px;
  position: absolute;
  right: 0;
  bottom: 0;
  object-fit: cover;

  @media screen and (max-width: 950px) {display: none;}
`;

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
  top: -50px;
  z-index: 2;

  @media screen and (max-width: 950px) {display: none;}
`;

export const CharacterTakt = styled.img`
  position: absolute;
  top: 20px;
  width: 420px;
  object-fit: contain;
  
  @media screen and (max-width: 1920px) {width: 600px;}
  @media screen and (max-width: 1600px) {width: 420px;}
  @media screen and (max-width: 1200px) {width: 350px;}
`;

export const CharacterDestiny = styled.img`
  position: relative;
  top: 60px;
  width: 600px;
  object-fit: contain;

  @media screen and (max-width: 1920px) {width: 750px;}
  @media screen and (max-width: 1600px) {width: 550px;}
  @media screen and (max-width: 1200px) {width: 420px;}
`;

export const InfosContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 950px) {
    width: 100%;
    padding: 15px;
  }
`;

export const OfficialLogo = styled.img`
  width: 450px;
  margin-left: 20px;

  @media screen and (max-width: 1200px) {width: 350px;}
  @media screen and (max-width: 400px) {width: 280px;}
  @media screen and (max-width: 340px) {width: 240px;}
`;

export const InfosTextContainer = styled.p`
  font-weight: 500;
  font-family: Nunito;
  font-size: 19px;
  color: #101010;
  position: relative;
  max-width: 450px;
  padding: 10px;
  word-break: break-all;
  margin-top: 50px;

  &::before {
    content: " ";
    position: absolute;
    border-left: 2px solid #101010;
    border-top: 2px solid #101010;
    border-bottom: 2px solid #101010;
    padding:5px;
    top: -10px;
    bottom: -10px;
    left: -5px;
    border-radius: 4px;
  }

  &::after {
    content: " ";
    position: absolute;
    border-right: 2px solid #101010;
    border-top: 2px solid #101010;
    border-bottom: 2px solid #101010;
    padding: 5px;
    top: -10px;
    bottom: -10px;
    right: -5px;
    border-radius: 4px;
  }

  @media screen and (max-width: 500px) {font-size: 17px;}
  @media screen and (max-width: 400px) {font-size: 15px;}
`;

export const ReadMoreButton = styled.button`
  width: 230px;
  height: 50px;
  border-radius: 5px;
  transform-origin: bottom left;
  background-color: #d52d58;
  color: #ffffff;
  font-family: Nunito;
  font-size: 15px;
  font-weight: 900;
  margin-top: 50px;
  cursor: pointer;
  animation: blob 2s linear infinite;
  z-index: 1;

  &:hover {background-color: #8e1836;}
  &:active {background-color: #5c051b;}

  @media screen and (max-width: 400px) {
    width: 200px;
    height: 45px;
  }
`;
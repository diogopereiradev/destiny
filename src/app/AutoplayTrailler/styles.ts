import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-height: 600px;
  margin-top: -10px;
  background-color: #beedf4dd;
  z-index: 0;
  overflow: hidden;
`;

export const BluredVideoContainer = styled.div`
  position: absolute;
  z-index: -100;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.iframe`
  width: 100vw;
  height: 56.25vw;
  z-index: -1;
  position: relative;
  vertical-align: bottom;
`;

export const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: #fff;
  z-index: 1000;
  clip-path: polygon(0 0, 0% 100%, 100% 51%);
  cursor: pointer;
`;
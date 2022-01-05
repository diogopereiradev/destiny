import './interfaces';
import styled from 'styled-components';
import screenMove from './keyframes';

export const Container = styled.div<CloudsProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 950px) {display: none;}

  i {
    background: #ffffff;
    width: 400px;
    height: 200px;
    position: absolute;
    filter: blur(70px);
    border-radius: 30%;
    transform-origin: bottom left;
    animation: ${screenMove} 5s linear infinite;
    z-index: -1;
  }
`;
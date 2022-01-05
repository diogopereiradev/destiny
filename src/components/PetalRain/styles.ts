import './interfaces';
import styled from 'styled-components';
import screenMove from './keyframes';

export const Container = styled.div<RainProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  i {
    background: #d52d58;
    width: 25px;
    height: 40px;
    position: absolute;
    border-radius: 30px 0px 30px 0px;
    transform-origin: bottom left;
    animation: ${screenMove} 5s linear infinite;
  }
`;
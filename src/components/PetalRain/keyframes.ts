import { keyframes } from 'styled-components';

export default keyframes`
  from {
    transform: translateY(-200px) rotate(0deg);
  }
  to {
    opacity: 0;
    transform: translateY(calc(100vh)) rotate(360deg);
  }
`;
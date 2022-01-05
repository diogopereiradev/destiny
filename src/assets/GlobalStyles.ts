import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 1;
    scroll-behavior: smooth;
  }

  body {
    background-color: #9bc5cbdd;
  }

  button, hr, a, ul, ol, input {
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    list-style: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: #9bc5cbdd;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d52d58;
  }
`;
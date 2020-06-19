import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #f0f0f5;
    color: #474547;
  }

  body, input, button {
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

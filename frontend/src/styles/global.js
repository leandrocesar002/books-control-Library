import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, select,ul, nav, li {
    color: #858585;
    font-size: 14px;
    font-family: 'poppins', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  .searchParam {
    margin-top:15px;
    margin-left: 20px;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  .searchParamAcess {
    margin-left: -20px;

    ul {
      margin-left: -150px;
      margin-top: -10px;
    }
  }

  .load {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }`;

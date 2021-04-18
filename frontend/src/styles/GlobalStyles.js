import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Lato', sans-serif,
    sans-serif;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100vh;
  }

  ul, li {
    list-style: none;
  }

  body {
    background-color: #EBF6FF;
  }
`;

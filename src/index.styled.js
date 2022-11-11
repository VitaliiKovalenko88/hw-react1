import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  display: inline-block;
  cursor: pointer;
  font-style: inherit;
}

ul, 
ol {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  margin: 0px;
  padding: 0px;
}

h1, 
h2, 
h3, 
h4, 
h5, 
h6 {
  margin: 0px;
  padding: 0px;
}
`;


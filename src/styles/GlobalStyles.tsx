import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

//Reset 
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0px;
  padding:0px;
  background-color: #FEFDF9;
  font-family: 'Inter', sans-serif;
}
a {
  text-decoration: none;
  color:inherit;
}
h1,
h2,
h3,
p {
  margin: 0px;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
img {
  display: block;
  max-width: 100%;
}

//Scroll
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #FFFF00;
  border-radius: 5px;
}


`;

export default GlobalStyles;

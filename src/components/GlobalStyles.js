import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "../components/thame";
const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${defaultTheme.background};
    font-family: ${defaultTheme.fonts.primary};
   
    
    
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


`;
export default GlobalStyles;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
-webkit-box-align:stretch;
-webkit-box-direction: normal;
-webkit-box-flex:0;
-webkit-box-ordinal-group:1;
-webkit-box-orient:horizontal;
-webkit-box-pack: start;
-webkit-mask-position-x:0%;
-webkit-mask-position-y:0%;
-webkit-text-fill-color:rgb(0, 0, 0);
-webkit-text-stroke-color:rgb(0, 0, 0);
-webkit-text-stroke-width:0px;
  box-sizing:border-box;
  height:100vh;
  width:100vw;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  overflow: auto;
  background-repeat: no-repeat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: none;
  white-space: normal;
  word-wrap: normal;
  word-break: normal;
  font-family: "Roboto", sans-serif;
  }
`;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
console.log(<App />);

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --primary: #e91e63;
  --secondary: #7b809a;
  --info: ##1A73E8;
  --success: #4CAF50;
  --warning: #fb8c00;
  --error: #f44335;
  --light: #f0f2f5;
  --dark: #344767;
  --gradient-primary:#EC407A | #D81B60;
  --gradient-secondary: #747b8a | #495361;
  --gradient-info: #49a3f1 | #1A73E8;
  --gradient-success:#66BB6A | #43A047;
  --gradient-warning:#FFA726 | #FB8C00;
  --gradient-error:#EF5350 | #E53935;
  --gradient-light:#EBEFF4 | #CED4DA;
  --gradient-dark-1:#42424a ;
  --gradient-dark-2: #191919;
}
*{
    margin:0%;
    padding:0;
    box-sizing:border-box;
    outline:0;    
  }

  body {
  font: 400 14px Montserrat, sans-serif;
  background:var(--light);
  height: 100vh;
  -webki-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input,
button,
textarea {
  font: 400 18px Montserrat, sans-serif;
}
button {
  cursor: ponter;
}
h1, h2, h3, h4, h5, h6 {
  color: var(--dark);
  font: 800 25px Montserrat, sans-serif;
}
a {
  text-decoration: none;
}
hr {
    height: 0.1rem;
    margin: 1.6rem 0px;
    border: none;
    opacity: 0.25;

    overflow: hidden;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0)
    ) !important;
  }
`;

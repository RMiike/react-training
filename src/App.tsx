import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

import React from "react";

import { GlobalStyle } from "./globalStyle";
import { Header, Profile } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Profile />
    </>
  );
}

export default App;

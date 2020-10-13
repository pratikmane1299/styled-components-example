import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 }
`;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 190px;
  padding-left: 190px;
`;

const H1 = styled.h1`
  text-align: center;
  color: #383333;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>Styled Components Example</H1>
      </Container>
    </>
  );
}

export default App;

import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <Main>
      <Header />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8e9dd;
  padding: 0 16px;
`;
export default App;

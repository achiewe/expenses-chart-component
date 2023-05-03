import { useState } from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import Statistic from "./components/Statistic";

function App(): JSX.Element {
  return (
    <StyledMain>
      <Balance />
      <Statistic />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background-color: #f8e9dd;
  padding: 0 16px;
`;
export default App;

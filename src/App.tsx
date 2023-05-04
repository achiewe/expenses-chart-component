import styled from "styled-components";
import Balance from "./components/Balance";
import Statistic from "./components/Statistic";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import { Info } from "./components/Types";

function App(): JSX.Element {
  const [statisticInfo, setStatisticInfo] = useState<Info[]>([]);
  return (
    <StyledMain>
      <GlobalStyles />
      <Balance />
      <Statistic
        statisticInfo={statisticInfo}
        setStatisticInfo={setStatisticInfo}
      />
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
  @media (min-width: 1024px) {
    padding: 0;
    gap: 24px;
  }
`;
export default App;

import styled from "styled-components";
import Balance from "./components/Balance";
import Statistic from "./components/Statistic";
import GlobalStyles from "./GlobalStyles";

function App(): JSX.Element {
  return (
    <StyledMain>
      <GlobalStyles />
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
  @media (min-width: 1024px) {
    padding: 0;
  }
`;
export default App;

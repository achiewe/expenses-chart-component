import LogoSvg from "../photoes/logo.svg";
import styled from "styled-components";

const Balance = (): JSX.Element => {
  return (
    <HeaderDiv>
      <h1>
        My balance <br />
        <span> $921.48</span>
      </h1>
      <img src={LogoSvg} alt="circles logo" />
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px 22px 20px;
  background-color: #ec755d;
  border-radius: 10px;

  @media (min-width: 1024px) {
    padding: 27px 39px 25px 32px;
    border-radius: 20px;
  }

  h1 {
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #ffffff;

    @media (min-width: 1024px) {
      font-size: 18px;
      line-height: 23.44px;
    }
    span {
      font-size: 24px;
      font-weight: 700;
      line-height: 31px;
      letter-spacing: 0px;
      text-align: left;

      @media (min-width: 1024px) {
        font-size: 32px;
        line-height: 41.66px;
      }
    }
  }
`;
export default Balance;

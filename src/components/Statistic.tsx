import styled from "styled-components";
import { Info } from "./Types";
import { useEffect } from "react";
import axios from "axios";
import ChartRow from "./ChartRow";

interface Props {
  statisticInfo: Info[];
  setStatisticInfo(statisticInfo: Info[]): void;
}

const Statistic = ({ statisticInfo, setStatisticInfo }: Props): JSX.Element => {
  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get("/data.json");
      const data = response.data;
      setStatisticInfo(data);
      console.log(statisticInfo);
    };
    requestData();
  }, []);

  const AmountArray = statisticInfo.map((item: { amount: string }) =>
    Number(item.amount)
  );

  const MaxQuantity = Math.max(...AmountArray);
  console.log(MaxQuantity);

  return (
    <MainDiv>
      <div className="graphical-div">
        <h1>Spending - Last 7 days</h1>
        <div className="graphical-representation">
          {statisticInfo.map((place, i) => (
            <ChartRow
              statisticInfo={statisticInfo}
              i={i}
              key={i}
              MaxQuantity={MaxQuantity}
              place={place}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="total-month">
        <h3>
          Total this month <br /> <span className="grow">$478.33</span>
        </h3>
        <div className="result-last">
          <span className="grow span">+2.4% </span>
          <h3>from last month</h3>
        </div>
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.main`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  padding: 24px 20px;
  background-color: #fffbf6;
  border-radius: 10px;

  @media (min-width: 1024px) {
    padding: 32px 40px 49px 40px;
    border-radius: 20px;
    gap: 32px;
  }

  .graphical-div {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 52px;

    @media (min-width: 1024px) {
      gap: 66px;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 31px;
      letter-spacing: 0px;
      text-align: left;
      color: #382314;

      @media (min-width: 1024px) {
        font-size: 32px;
        line-height: 41.66px;
      }
    }
    .graphical-representation {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 12px;
      width: 100%;
      @media (min-width: 1024px) {
        gap: 17.91px;
      }
    }
  }
  hr {
    width: 100%;
    border: 1px solid #f8e9dd;
  }

  .total-month {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      font-size: 15px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      color: #92857a;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }

    .result-last {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }

    .grow {
      font-size: 30px;
      font-weight: 700;
      line-height: 39px;
      letter-spacing: 0px;
      text-align: left;
      color: #382314;
      @media (min-width: 1024px) {
        font-size: 48px;
        line-height: 62.5px;
      }
    }

    .span {
      font-size: 15px;
      line-height: 19.53px;
      @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 23.44px;
      }
    }
  }
`;

export default Statistic;

import { Info } from "./Types";
import styled from "styled-components";

interface Props {
  statisticInfo: Info[];
  i: number;
  MaxQuantity: Number;
}

const ChartRow = ({ statisticInfo, i, MaxQuantity }: Props): JSX.Element => {
  const ColumnSize: Number =
    (Number(statisticInfo[i].amount) / Number(MaxQuantity)) * 150;
  return (
    <MonthStatistic>
      <ColumnDiv
        ColumnSize={ColumnSize}
        MaxQuantity={MaxQuantity}
        amount={statisticInfo[i].amount}
      >
        <div className="result">
          {statisticInfo.length > 0 && statisticInfo[0].day && (
            <>{`$${statisticInfo[i].amount}`}</>
          )}
        </div>
      </ColumnDiv>
      {statisticInfo.length > 0 && statisticInfo[0].day && (
        <h4>{statisticInfo[i].day}</h4>
      )}
    </MonthStatistic>
  );
};

const MonthStatistic = styled.div<{}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  width: 100%;
  @media (min-width: 1024px) {
    gap: 8px;
  }

  .result {
    position: absolute;
    top: -50px;
    left: -13px;
    right: 0;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #382314;
    width: 55px;
    border-radius: 5px;
    height: 30px;
    font-size: 13px;
    font-weight: 700;
    line-height: 23px;
    color: #fffbf6;
    letter-spacing: 0px;
    text-align: center;
    @media (min-width: 1024px) {
      width: 75px;
      border-radius: 5px;
      height: 40px;
      font-size: 15px;
    }
  }

  h4 {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    color: #92857a;
    @media (min-width: 1024px) {
      font-size: 15px;
      line-height: 19.53px;
    }
  }
`;

const ColumnDiv = styled.div<{
  ColumnSize: any;
  MaxQuantity: any;
  amount: any;
}>`
  background-color: ${(props) =>
    Number(props.amount) === Number(props.MaxQuantity) ? "#76B5BC" : "#EC755D"};
  position: relative;
  border-radius: 3px;
  height: ${(props) => props.ColumnSize}px;
  width: 100%;
  max-width: 33px;
  :hover {
    background-color: ${(props) =>
      Number(props.amount) === Number(props.MaxQuantity)
        ? "#B4E0E5"
        : "#FF9B86"};
  }
  :hover .result {
    display: flex;
  }
  cursor: pointer;
  @media (min-width: 1024px) {
    max-width: 50.36px;
  }
`;

export default ChartRow;

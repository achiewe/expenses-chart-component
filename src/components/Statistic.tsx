import styled from "styled-components";
import { useState } from "react";

const Statistic = (): JSX.Element => {
  return (
    <MainDiv>
      <div className="graphical-div">
        <h1>Spending - Last 7 days</h1>
        <div className="graphical-representation">
          <div className="month-statistic">
            <div className="div mon"></div>
            <h4>mon </h4>
          </div>
          <div className="month-statistic">
            <div className="div tue"></div>
            <h4>tue </h4>
          </div>
          <div className="month-statistic">
            <div className="div wed">
              <div className="red"> </div>
            </div>
            <h4>wed </h4>
          </div>
          <div className="month-statistic">
            <div className="div thu"></div>
            <h4>thu </h4>
          </div>
          <div className="month-statistic">
            <div className="div fri"></div>
            <h4>fri </h4>
          </div>
          <div className="month-statistic">
            <div className="div sat"></div>
            <h4>sat </h4>
          </div>
          <div className="month-statistic">
            <div className="div sun"></div>
            <h4>sun </h4>
          </div>
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

  .graphical-div {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 52px;

    h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 31px;
      letter-spacing: 0px;
      text-align: left;
      color: #382314;
    }
    .graphical-representation {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: 12px;
      width: 100%;

      .month-statistic {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
        width: 100%;

        .div {
          background-color: #ec755d;
          border-radius: 3px;
          width: 100%;
          max-width: 33px;
        }

        .mon {
          height: 50px;
        }
        .tue {
          height: 100px;
        }
        .wed {
          background-color: #76b5bc;
          height: 150px;
          cursor: pointer;
          :hover .red {
            display: block;
            cursor: pointer;
          }
        }

        .red {
          display: none;
          background-color: red;
          width: 20px;
          height: 100px;
        }
        .thu {
          height: 89px;
        }
        .fri {
          height: 67px;
        }
        .sat {
          height: 124px;
        }
        .sun {
          height: 73px;
        }

        h4 {
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: 0px;
          text-align: center;
          color: #92857a;
        }
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
    }

    .grow {
      font-size: 30px;
      font-weight: 700;
      line-height: 39px;
      letter-spacing: 0px;
      text-align: left;
      color: #382314;
    }

    .span {
      font-size: 15px;
      line-height: 19.53px;
    }

    .result-last {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }
`;

export default Statistic;

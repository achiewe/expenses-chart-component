import styled from "styled-components";

const Statistic = (): JSX.Element => {
  return (
    <MainDiv>
      <div className="graphical-div">
        <h1>Spending - Last 7 days</h1>
        <div className="graphical-representation">
          <div className="month-statistic">
            <div className="div mon">
              <div className="red">$17.45 </div>
            </div>
            <h4>mon </h4>
          </div>
          <div className="month-statistic">
            <div className="div tue">
              <div className="red">$34.91 </div>
            </div>
            <h4>tue </h4>
          </div>
          <div className="month-statistic">
            <div className="div wed">
              <div className="red">$52.36 </div>
            </div>
            <h4>wed </h4>
          </div>
          <div className="month-statistic">
            <div className="div thu">
              <div className="red">$31.07 </div>
            </div>
            <h4>thu </h4>
          </div>
          <div className="month-statistic">
            <div className="div fri">
              <div className="red">$23.39 </div>
            </div>
            <h4>fri </h4>
          </div>
          <div className="month-statistic">
            <div className="div sat">
              <div className="red">$43.28 </div>
            </div>
            <h4>sat </h4>
          </div>
          <div className="month-statistic">
            <div className="div sun">
              <div className="red">$25.48 </div>
            </div>
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

      .month-statistic {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
        width: 100%;
        @media (min-width: 1024px) {
          gap: 8px;
        }

        .div {
          background-color: #ec755d;
          position: relative;
          border-radius: 3px;
          width: 100%;
          max-width: 33px;
          :hover {
            background-color: #ff9b86;
          }
          :hover .red {
            display: flex;
          }
          cursor: pointer;
          @media (min-width: 1024px) {
            max-width: 50.36px;
          }
        }

        .red {
          position: absolute;
          top: -50px;
          left: -13px;
          right: 0;
          display: none;
          justify-content: center;
          align-items: center;
          background-color: #382314;
          width: 75px;
          border-radius: 5px;
          height: 40px;
          font-size: 18px;
          font-weight: 700;
          line-height: 23px;
          color: #fffbf6;
          letter-spacing: 0px;
          text-align: center;
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
          :hover {
            background-color: #b4e0e5;
          }
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
          @media (min-width: 1024px) {
            font-size: 15px;
            line-height: 19.53px;
          }
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

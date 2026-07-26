import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const [balance, setBalance] = useState(0);
  const [holdings, setHoldings] = useState([]);
  const { stockData } = useContext(GeneralContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // Fetch funds
    axios.get("http://localhost:3002/funds", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setBalance(res.data.balance))
      .catch(err => console.error("Error fetching funds:", err));

    // Fetch holdings
    axios.get("http://localhost:3002/allHoldings", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setHoldings(res.data))
      .catch(err => console.error("Error fetching holdings:", err));
  }, []);

  const totalInvestment = holdings.reduce((sum, h) => sum + (h.avg * h.qty), 0);
  const totalCurrentValue = holdings.reduce((sum, h) => {
    const livePrice = stockData[h.name]?.price || h.price;
    return sum + (livePrice * h.qty);
  }, 0);
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;
  const pnlSign = totalPnL >= 0 ? "+" : "";

  const username = localStorage.getItem("username") || "User";

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{(balance / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>{(balance / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totalPnL >= 0 ? "profit" : "loss"}>
              {(totalPnL / 1000).toFixed(2)}k <small>{pnlSign}{totalPnLPercent.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(totalCurrentValue / 1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Investment <span>{(totalInvestment / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;

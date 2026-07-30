import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { stockData } = useContext(GeneralContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://zerodha-backend-api.vercel.app/allHoldings", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setAllHoldings(res.data);
    }).catch(err => {
      console.error("Error fetching holdings:", err);
    });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Price",
        data: allHoldings.map((stock) => stockData[stock.name]?.price || stock.price),
        backgroundColor: "rgba(33, 150, 243, 0.6)",
      },
    ],
  };

  // Dynamic summary calculations
  const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const totalCurrentValue = allHoldings.reduce((sum, stock) => {
    const livePrice = stockData[stock.name]?.price || stock.price;
    return sum + (livePrice * stock.qty);
  }, 0);
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;
  const pnlSign = totalPnL >= 0 ? "+" : "";

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const livePrice = stockData[stock.name]?.price || stock.price;
              const curValue = livePrice * stock.qty;
              const investment = stock.avg * stock.qty;
              const stockPnL = curValue - investment;
              const isProfit = stockPnL >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              
              const netChange = ((livePrice - stock.avg) / stock.avg) * 100;
              const netSign = netChange >= 0 ? "+" : "";
              const netText = `${netSign}${netChange.toFixed(2)}%`;
              
              const isDown = stockData[stock.name]?.isDown ?? (livePrice < stock.price);
              const dayClass = isDown ? "loss" : "profit";
              const dayText = stockData[stock.name]?.percent || stock.day || "0.00%";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{livePrice.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{stockPnL.toFixed(2)}</td>
                  <td className={profClass}>{netText}</td>
                  <td className={dayClass}>{dayText}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row" style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            {totalPnL.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({pnlSign}{totalPnLPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

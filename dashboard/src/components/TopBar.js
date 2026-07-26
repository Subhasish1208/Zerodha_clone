import React, { useState, useEffect } from "react";
import Menu from "./Menu";

const TopBar = ({ onLogout }) => {
  const [nifty, setNifty] = useState({ price: 24320.50, change: 105.30, percent: "+0.43%", isDown: false });
  const [sensex, setSensex] = useState({ price: 79850.15, change: 350.20, percent: "+0.44%", isDown: false });

  useEffect(() => {
    const interval = setInterval(() => {
      const niftyChange = (Math.random() * 20 - 10);
      setNifty(prev => {
        const newPrice = Number((prev.price + niftyChange).toFixed(2));
        const originalBase = 24215.20;
        const totalChange = newPrice - originalBase;
        const totalChangePercent = (totalChange / originalBase) * 100;
        const isDown = totalChange < 0;
        const sign = isDown ? "" : "+";
        return {
          price: newPrice,
          change: totalChange,
          percent: `${sign}${totalChangePercent.toFixed(2)}%`,
          isDown
        };
      });

      const sensexChange = (Math.random() * 60 - 30);
      setSensex(prev => {
        const newPrice = Number((prev.price + sensexChange).toFixed(2));
        const originalBase = 79500.00;
        const totalChange = newPrice - originalBase;
        const totalChangePercent = (totalChange / originalBase) * 100;
        const isDown = totalChange < 0;
        const sign = isDown ? "" : "+";
        return {
          price: newPrice,
          change: totalChange,
          percent: `${sign}${totalChangePercent.toFixed(2)}%`,
          isDown
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className={`index-points ${nifty.isDown ? "loss" : "profit"}`} style={{ fontWeight: "bold" }}>
            {nifty.price.toFixed(2)}
          </p>
          <p className={`percent ${nifty.isDown ? "loss" : "profit"}`} style={{ fontSize: "0.85rem" }}>
            {nifty.change.toFixed(2)} ({nifty.percent})
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className={`index-points ${sensex.isDown ? "loss" : "profit"}`} style={{ fontWeight: "bold" }}>
            {sensex.price.toFixed(2)}
          </p>
          <p className={`percent ${sensex.isDown ? "loss" : "profit"}`} style={{ fontSize: "0.85rem" }}>
            {sensex.change.toFixed(2)} ({sensex.percent})
          </p>
        </div>
      </div>

      <Menu onLogout={onLogout} />
    </div>
  );
};

export default TopBar;

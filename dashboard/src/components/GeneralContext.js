import React, { useState, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow";

const initialStockData = {
  INFY: { price: 1555.45, percent: "-1.60%", isDown: true },
  ONGC: { price: 116.8, percent: "-0.09%", isDown: true },
  TCS: { price: 3194.8, percent: "-0.25%", isDown: true },
  KPITTECH: { price: 266.45, percent: "3.54%", isDown: false },
  QUICKHEAL: { price: 308.55, percent: "-0.15%", isDown: true },
  WIPRO: { price: 577.75, percent: "0.32%", isDown: false },
  "M&M": { price: 779.8, percent: "-0.01%", isDown: true },
  RELIANCE: { price: 2112.4, percent: "1.44%", isDown: false },
  HUL: { price: 512.4, percent: "1.04%", isDown: false },
  BHARTIARTL: { price: 541.15, percent: "+2.99%", isDown: false },
  HDFCBANK: { price: 1522.35, percent: "+0.11%", isDown: false },
  HINDUNILVR: { price: 2417.4, percent: "+0.21%", isDown: false },
  ITC: { price: 207.9, percent: "+0.80%", isDown: false },
  SBIN: { price: 430.2, percent: "-0.34%", isDown: true },
  SGBMAY29: { price: 4719.0, percent: "+0.15%", isDown: false },
  TATAPOWER: { price: 124.15, percent: "-0.24%", isDown: true },
  EVEREADY: { price: 312.35, percent: "-1.24%", isDown: true },
  JUBLFOOD: { price: 3082.65, percent: "-1.35%", isDown: true }
};

const GeneralContext = React.createContext({
  openOrderWindow: (uid, mode) => {},
  closeOrderWindow: () => {},
  stockData: {},
});

export const GeneralContextProvider = (props) => {
  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");
  const [stockData, setStockData] = useState(initialStockData);

  // Dynamic price ticker simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prevData) => {
        const updated = { ...prevData };
        Object.keys(updated).forEach((symbol) => {
          const stock = updated[symbol];
          const changePercent = (Math.random() * 0.4 - 0.2); // between -0.2% and +0.2%
          const newPrice = Number((stock.price * (1 + changePercent / 100)).toFixed(2));
          
          // Calculate net change percentage based on the new price vs a base price or previous price
          const originalPrice = initialStockData[symbol].price;
          const totalChangePercent = ((newPrice - originalPrice) / originalPrice) * 100;
          const isDown = totalChangePercent < 0;
          const percentSign = isDown ? "" : "+";
          const percentText = `${percentSign}${totalChangePercent.toFixed(2)}%`;

          updated[symbol] = {
            ...stock,
            price: newPrice,
            percent: percentText,
            isDown,
          };
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenOrderWindow = (uid, mode) => {
    setIsOrderWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderMode(mode || "BUY");
  };

  const handleCloseOrderWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openOrderWindow: handleOpenOrderWindow,
        closeOrderWindow: handleCloseOrderWindow,
        stockData,
      }}
    >
      {props.children}
      {isOrderWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const { closeOrderWindow, stockData } = useContext(GeneralContext);
  
  // Get live price or default
  const livePrice = stockData[uid]?.price || 0.0;
  
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(livePrice);
  const [error, setError] = useState("");

  // Sync price if it updates before user edits it (optional, but setting it initially is good)
  useEffect(() => {
    if (stockPrice === 0) {
      setStockPrice(livePrice);
    }
  }, [livePrice, stockPrice]);

  const handleOrderClick = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to place orders.");
      return;
    }

    try {
      const finalPrice = Number(stockPrice) > 0 ? Number(stockPrice) : (Number(livePrice) > 0 ? Number(livePrice) : 100);
      const finalQty = Number(stockQuantity) > 0 ? Number(stockQuantity) : 1;

      await axios.post(
        "https://zerodha-clone-seven-xi.vercel.app/newOrder",
        {
          name: uid,
          qty: finalQty,
          price: finalPrice,
          mode: mode || "BUY",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      closeOrderWindow();
      // Reload page to refresh holdings, positions, funds, and orders from database
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || "Order placement failed.");
    }
  };

  const isBuy = mode === "BUY";
  const themeClass = isBuy ? "buy-theme" : "sell-theme";

  return (
    <div className={`order-window-container ${themeClass}`} id="buy-window">
      <div className="order-window-header">
        <h3>{isBuy ? "Buy" : "Sell"} {uid}</h3>
        <span className="close-btn" onClick={closeOrderWindow}>&times;</span>
      </div>

      {error && <div className="order-error">{error}</div>}

      <div className="order-window-body">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price (LTP: {livePrice})</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="order-window-footer">
        <span className="margin-info">Margin required: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div className="action-buttons">
          <button className="btn btn-action" onClick={handleOrderClick}>
            {isBuy ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={closeOrderWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

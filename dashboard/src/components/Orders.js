import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://zerodha-clone-seven-xi.vercel.app/allOrders", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setOrders(res.data);
    }).catch(err => {
      console.error("Error fetching orders:", err);
    });
  }, []);

  return (
    <div className="orders-container">
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="orders" style={{ border: "none" }}>
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
          </div>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const time = new Date(order.createdAt).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                });
                const isBuy = order.mode === "BUY";
                const typeStyle = {
                  color: isBuy ? "#4184f3" : "#ff5722",
                  fontWeight: "bold"
                };

                return (
                  <tr key={index}>
                    <td>{time}</td>
                    <td style={typeStyle}>{order.mode}</td>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td style={{ color: "#4caf50", fontWeight: "500" }}>COMPLETE</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;

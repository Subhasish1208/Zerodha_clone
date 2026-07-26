import React, { useState, useEffect } from "react";
import axios from "axios";

const Funds = () => {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  const fetchFunds = () => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3002/funds", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setBalance(res.data.balance);
    }).catch(err => {
      console.error("Error fetching funds:", err);
    });
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  const handleUpdateFunds = async (action) => {
    setError("");
    const amountStr = window.prompt(`Enter amount to ${action === "add" ? "deposit" : "withdraw"}:`);
    if (amountStr === null) return; // Cancelled

    const amount = Number(amountStr);
    if (isNaN(amount) || amount <= 0) {
      window.alert("Please enter a valid positive number.");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:3002/updateFunds",
        { amount, action },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setBalance(res.data.balance);
      window.alert(`${action === "add" ? "Deposit" : "Withdrawal"} of ₹${amount.toFixed(2)} completed successfully!`);
    } catch (err) {
      const errMsg = err.response?.data?.error || err.response?.data?.message || "Failed to update funds.";
      window.alert(errMsg);
    }
  };

  return (
    <>
      <div className="funds" style={{ marginBottom: "20px" }}>
        <p style={{ marginRight: "15px" }}>Instant, zero-cost virtual fund transfers with simulated UPI </p>
        <button className="btn btn-green" onClick={() => handleUpdateFunds("add")} style={{ border: "none", cursor: "pointer", fontWeight: "bold" }}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={() => handleUpdateFunds("withdraw")} style={{ border: "none", cursor: "pointer", fontWeight: "bold", marginLeft: "10px" }}>
          Withdraw
        </button>
      </div>

      {error && <div style={{ color: "#ff5722", marginBottom: "15px" }}>{error}</div>}

      <div className="row">
        <div className="col">
          <span>
            <p style={{ fontSize: "1.4rem", fontWeight: "500", color: "#fff" }}>Equity Portfolio Funds</p>
          </span>

          <div className="table" style={{ background: "#121824", borderRadius: "8px", border: "1px solid #1f293d" }}>
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored" style={{ color: "#4184f3", fontWeight: "bold" }}>
                {balance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp" style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp" style={{ color: "#fff" }}>
                {balance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <hr style={{ borderColor: "#1f293d" }} />
            <div className="data">
              <p>Opening Balance</p>
              <p style={{ color: "#fff" }}>
                {balance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <hr style={{ borderColor: "#1f293d" }} />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p style={{ color: "#fff" }}>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity" style={{ background: "#121824", borderRadius: "8px", border: "1px solid #1f293d", padding: "40px" }}>
            <p style={{ color: "#94a3b8", marginBottom: "20px" }}>You don't have a commodity account activated</p>
            <button className="btn btn-blue" style={{ border: "none", cursor: "pointer", fontWeight: "bold" }}>
              Activate Commodity Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;

import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      if (isLogin) {
        const res = await axios.post("https://zerodha-backend-ivqg.onrender.com/api/auth/login", {
          username,
          password,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("userId", res.data.user._id);
        onLoginSuccess();
      } else {
        const res = await axios.post("https://zerodha-backend-ivqg.onrender.com/api/auth/signup", {
          username,
          password,
        });
        setMessage(res.data.message || "Signup successful! Please log in.");
        setIsLogin(true);
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <img src="logo.png" alt="Logo" className="logo" style={{ width: "50px" }} />
          <h2>{isLogin ? "Login to Kite" : "Create Kite Account"}</h2>
          <p className="subtitle">Zerodha's Trading Platform Clone</p>
        </div>

        {error && <div className="alert error">{error}</div>}
        {message && <div className="alert success">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username / Client ID</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. zenith_trader"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isLogin ? "New to Kite?" : "Already have an account?"}{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setMessage("");
              }}
            >
              {isLogin ? "Create an account" : "Login now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

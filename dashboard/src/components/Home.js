import React, { useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Login from "./Login";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <TopBar onLogout={handleLogout} />
      <Dashboard />
    </>
  );
};

export default Home;

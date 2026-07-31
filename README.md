# 🌌 Zerodha Clone — Full-Stack Stock Trading Simulator

A production-deployed, full-stack stock trading simulation platform built with React, Node.js, Express, and MongoDB. Features secure JWT authentication, real-time price fluctuation simulation, virtual portfolio management, and database-backed BUY/SELL trade execution.

---

## 🔗 Live Applications

- **Marketing Website:** [Zerodha Clone](https://zerodha-marketing.vercel.app/)
- **Trading Dashboard:** [Zerodha Dashboard](https://zerodha-dashboard-three-alpha.vercel.app/)

---

## 🔑 Demo Credentials

Use these credentials to explore the platform without creating a new account:

```text
Username / Client ID: Demo
Password: Demo
```

*Newly initialized accounts start with ₹100,000 in virtual funds, 13 pre-loaded holdings, 2 open positions, and full access to trading features.*

---

## 📌 Project Overview

**Zerodha Clone** is a stock-market simulation ecosystem inspired by modern brokerage apps like Kite. It consists of three integrated services:

1. **Marketing Frontend (`/frontend`):** Public landing page showcasing products, ecosystem, pricing, and company information.
2. **Trading Dashboard (`/dashboard`):** Authenticated workspace featuring live stock watchlists, interactive charts, holdings, positions, order logs, and funds management.
3. **Backend API (`/backend`):** Express & MongoDB service managing authentication, trade execution, portfolio state, and fund transactions.

> *Note: This is an educational simulator for virtual stock trading.*

---

## ✨ Key Features

- **🔐 Secure Authentication:** User signup & login with bcrypt password hashing and JWT token authorization.
- **📈 Dynamic Price Ticker:** Simulated real-time price fluctuations and live profit/loss updates across all portfolio views.
- **🛒 Instant BUY & SELL Terminal:** Execute market orders directly updating holdings, positions, virtual balance, and transaction history.
- **💼 Portfolio & Risk Tracking:** Automated calculation of total investment, current valuation, overall P&L, and day returns.
- **💰 Virtual Funds Management:** Seamlessly deposit or withdraw virtual capital into your trading account.
- **📊 Interactive Analytics:** Visual breakdown of asset allocation using Doughnut and Vertical Chart visualizations.

---

## 🛠️ Tech Stack

- **Frontend & Dashboard:** React.js, React Router, Material-UI, Chart.js, Axios, Vanilla CSS
- **Backend API:** Node.js, Express.js, Mongoose, JWT, Bcrypt, CORS
- **Database:** MongoDB Atlas (Cloud)
- **Deployment:** Vercel (Serverless Functions & Static Web Hosting)

---

## 🗄️ Database Schemas

- **Users:** `username`, `password` (hashed), `balance`, `createdAt`
- **Holdings:** `userId`, `name`, `qty`, `avg`, `price`, `net`, `day`
- **Positions:** `userId`, `product`, `name`, `qty`, `avg`, `price`, `net`, `day`, `isLoss`
- **Orders:** `userId`, `name`, `qty`, `price`, `mode` (`BUY`/`SELL`), `createdAt`

---

## 🚀 Running Locally

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Subhasish1208/Zerodha_clone.git
cd Zerodha_clone

# Install backend dependencies
cd backend && npm install

# Install dashboard dependencies
cd ../dashboard && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the `backend` directory:
```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 3. Start Development Servers
```bash
# Start Backend API (Port 3002)
cd backend && npm start

# Start Dashboard (Port 3001)
cd dashboard && npm start

# Start Frontend (Port 3000)
cd frontend && npm start
```

---

## 🌐 Deployment (Vercel)

- **Backend:** Deployed as Vercel Serverless Functions (`/backend/vercel.json`) with MongoDB Atlas.
- **Dashboard & Frontend:** Deployed as standalone React single-page applications on Vercel.

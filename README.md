# 🌌 Kite Zerodha Clone: Premium Trading Simulator

Welcome to the **Kite Zerodha Clone**—a full-stack, high-fidelity stock trading simulation platform rebuilt from the ground up to feature an ultra-premium, dark glassmorphic theme, live ticking market prices, and secure database-backed virtual trade execution.

## 🔗 Live Demo
*   **Marketing Landing Page**: [https://subhasish1208-zerodha.vercel.app](https://subhasish1208-zerodha.vercel.app) *(Replace with your deployed Vercel link)*
*   **Trading Platform (Kite)**: [https://subhasish1208-kite.vercel.app](https://subhasish1208-kite.vercel.app) *(Replace with your deployed Vercel link)*
*   **Server API**: [https://subhasish1208-backend.onrender.com](https://subhasish1208-backend.onrender.com) *(Replace with your deployed Render link)*

---

## 🎨 Premium Theme Overlay ("Looks Mine")
Unlike the plain white look of standard trading applications, this clone is styled with a custom dark aesthetic:
- **Deep Slate Canvas** (`#090d16`) with frosted-glass containers (`#121824`).
- **Luminous Neon Indicators** (Glow-in-the-dark `#00e676` for price up-ticks/profits, and `#ff1744` for down-ticks/losses).
- **Interactive UI Elements** featuring smooth hover micro-animations and custom modern typography.
- **Dynamic Charting** via Chart.js displaying responsive holdings and asset allocations.

---

## ⚡ Key Features

- **🔐 Session & Auth Check**: Complete sign-up and login flow backed by encrypted passwords (bcrypt) and secure JWT sessions.
- **📈 Live Price Ticker**: Real-time stock price fluctuations simulated directly inside your watchlist.
- **📊 Autocalculated Portfolio**: Fully dynamic Holdings and Positions pages that sum up investment values, last traded prices (LTPs), and net day returns in real time.
- **💸 Virtual UPI Cash Desk**: A working Funds screen displaying actual database balance, with instant deposits and withdrawals.
- **🛒 Generic Trade Terminal**: A single, theme-coded window supporting both BUY (Blue) and SELL (Red) transactions. Checks margins, verifies available funds, updates holdings, and logs transactions.
- **📜 Transaction Log**: Interactive Order History tab showing timestamps, stock ticker symbols, order type (BUY/SELL), and completion states.

---

## 🛠️ The Tech Stack

### Frontend (Client Apps)
* **Library**: React.js (v18)
* **Styling**: Vanilla CSS (Custom dark theme variables, responsive design), Material UI (MUI Icons)
* **Visualizations**: Chart.js & React-Chartjs-2
* **API Client**: Axios

### Backend (Server API)
* **Runtime**: Node.js & Express.js (v5)
* **Authentication**: JSON Web Tokens (JWT) & bcrypt
* **Middlewares**: CORS (Multi-origin support for dev servers), Body-Parser

### Database (Data Persistence)
* **DBMS**: MongoDB (Atlas cloud cluster or local fallback instance)
* **ORM**: Mongoose schemas (Users, Holdings, Positions, and Orders models)

---

## 🚀 Getting Started

To spin up the entire trading simulator ecosystem locally:

### 1. Configure the Environment
Ensure MongoDB is running locally on your machine at `mongodb://127.0.0.1:27017/zerodha`, or update `backend/.env` with your remote URI:
```env
MONGO_URL=mongodb://127.0.0.1:27017/zerodha
PORT=3002
```

### 2. Start the Backend API
```bash
cd backend
npm install
npm start
```
*App will start listening on port `3002`.*

### 3. Start the Trading Dashboard
```bash
cd dashboard
npm install
npm start
```
*App will compile and serve the Kite trading dashboard on [http://localhost:3001](http://localhost:3001).*

### 4. Start the Marketing Landing Page
```bash
cd frontend
npm install
npm start
```
*App will serve the main marketing site on [http://localhost:3000](http://localhost:3000).*

---

## 🔮 Demo Instructions
1. Open the landing page at [http://localhost:3000](http://localhost:3000).
2. Click **Signup Now** or **Login** to redirect to the trading workspace at [http://localhost:3001](http://localhost:3001).
3. Switch to the **Create an account** tab, sign up, and log in.
4. Your account is automatically initialized with 13 default holdings, 2 positions, and ₹100,000 in virtual funds!
5. Experience live-ticking stock prices, place buy/sell orders, deposit virtual cash on the **Funds** tab, and view your completed trades on the **Orders** tab.
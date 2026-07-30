# 🌌 Zerodha Clone — Full-Stack Stock Trading Simulator

<p align="center">
  A production-deployed virtual stock trading platform featuring secure authentication, simulated live prices, portfolio analytics, virtual fund management, and database-backed BUY/SELL execution.
</p>

<p align="center">
  <strong>React.js · Node.js · Express.js · MongoDB · JWT · Chart.js · Axios</strong>
</p>

<p align="center">
  <a href="https://zerodha-clone-pied-tau.vercel.app/">
    <img
      src="https://img.shields.io/badge/Landing_Page-Open_Live_Website-00c853?style=for-the-badge&logo=vercel&logoColor=white"
      alt="Open Zerodha Clone Landing Page"
    />
  </a>

  <a href="https://zerodha-dashboard-nu-two.vercel.app/">
    <img
      src="https://img.shields.io/badge/Trading_Dashboard-Open_Live_App-2979ff?style=for-the-badge&logo=react&logoColor=white"
      alt="Open Zerodha Trading Dashboard"
    />
  </a>

  <a href="https://zerodha-backend-ivqg.onrender.com">
    <img
      src="https://img.shields.io/badge/Backend_API-Online-8e24aa?style=for-the-badge&logo=render&logoColor=white"
      alt="Open Zerodha Backend API"
    />
  </a>
</p>

---

## 🔗 Live Applications

| Application | Purpose | Live URL |
|---|---|---|
| Marketing Website | Public Zerodha-inspired landing website | [Open Landing Page](https://zerodha-clone-pied-tau.vercel.app/) |
| Trading Dashboard | Authenticated virtual stock trading workspace | [Open Trading Dashboard](https://zerodha-dashboard-nu-two.vercel.app/) |
| Backend API | Authentication, portfolio, funds, and trade-processing server | [Open Backend API](https://zerodha-backend-ivqg.onrender.com) |

---

## 🔑 Demo Credentials

Use the following credentials to explore the complete platform without creating a new account:

```text
Username / Client ID: Demo
Password: Demo
```

You can also create a new account through the authentication interface.

A newly initialized account includes:

- ₹100,000 in virtual trading balance
- 13 default holdings
- 2 sample positions
- Personal order history
- Access to the complete dashboard
- Support for virtual deposits, withdrawals, purchases, and sales

---

# 📌 Project Overview

**Zerodha Clone** is a full-stack stock-market simulation platform inspired by modern brokerage applications.

The project goes beyond creating a static user-interface clone. It implements a functional virtual trading ecosystem where users can:

- Register and log in securely
- Access a personalized trading account
- Monitor dynamically changing stock prices
- Buy and sell stocks using virtual funds
- View holdings and positions
- Track portfolio performance
- Deposit and withdraw virtual money
- Review completed orders
- Visualize investments using responsive charts
- Maintain persistent account data through MongoDB

The platform is divided into three independently deployable applications:

1. **Marketing Frontend**  
   Public-facing Zerodha-inspired product and information website.

2. **Trading Dashboard**  
   Authenticated trading workspace containing the watchlist, holdings, positions, orders, funds, and trade terminal.

3. **Backend API**  
   Express server responsible for authentication, account initialization, fund management, order processing, holdings updates, and MongoDB communication.

> This project is an educational stock-trading simulator. It does not place real stock-market orders or process real financial transactions.

---

# ✨ Key Features

## 🔐 Secure Authentication

The platform includes a complete account authentication flow.

### Authentication capabilities

- User registration
- User login
- Password hashing with `bcrypt`
- JWT-based authentication
- Protected user-specific operations
- Demo-user access
- Persistent database-backed accounts
- Automatic account-data initialization

Passwords are hashed before being stored in the database and are never saved as plain text.

---

## 📈 Simulated Live Price Ticker

The dashboard includes a continuously updating watchlist that simulates stock-market price movement.

Each stock can experience:

- Positive price movement
- Negative price movement
- Updated last traded price
- Percentage changes
- Real-time profit and loss indicators

Updated stock values are reflected throughout the dashboard, including:

- Watchlist
- Holdings
- Positions
- Portfolio value
- Day returns
- Overall profit and loss

Positive movement is displayed using green indicators, while negative movement is displayed using red indicators.

---

## 🛒 Generic BUY and SELL Terminal

A reusable trading window supports both BUY and SELL operations.

### BUY transaction flow

When a user places a BUY order, the system:

1. Receives the stock symbol and requested quantity.
2. Reads the current simulated market price.
3. Calculates the total purchase value.
4. Checks the user’s available virtual balance.
5. Rejects the order if the balance is insufficient.
6. Deducts the required amount after successful validation.
7. Adds a new holding or updates an existing holding.
8. Creates a completed order record.
9. Stores the updated information in MongoDB.
10. Refreshes the user’s portfolio and funds.

### SELL transaction flow

When a user places a SELL order, the system:

1. Receives the stock symbol and requested quantity.
2. Checks whether the user owns the requested quantity.
3. Rejects the order if available holdings are insufficient.
4. Calculates the total sale value.
5. Reduces the quantity from the user’s holdings.
6. Credits the virtual sale value to the user’s balance.
7. Creates a completed transaction record.
8. Updates MongoDB.
9. Refreshes holdings, orders, and funds.

### Visual transaction states

- **BUY interface:** Blue
- **SELL interface:** Red

---

## 💼 Dynamic Portfolio Management

The platform automatically calculates portfolio values using the user’s holdings and current simulated market prices.

The system derives:

- Total investment
- Current portfolio value
- Overall profit or loss
- Daily profit or loss
- Average purchase price
- Last traded price
- Individual stock returns
- Portfolio return percentage
- Holding-wise investment allocation

Portfolio values update as simulated stock prices change.

---

## 💸 Virtual Funds Desk

The Funds module acts as a database-backed virtual wallet.

Users can:

- View available virtual balance
- Deposit virtual funds
- Withdraw virtual funds
- Use available funds to purchase stocks
- Receive funds after selling stocks
- View updated balance throughout the dashboard

The system validates withdrawal and trade requests against the user’s available balance.

---

## 📜 Order and Transaction History

Every completed trade is stored in MongoDB and displayed in the Orders section.

A transaction record can contain:

- Stock symbol
- Transaction type
- BUY or SELL state
- Quantity
- Execution price
- Total transaction value
- Completion status
- Date and time

This creates a persistent history of the user’s simulated trading activity.

---

## 📊 Interactive Portfolio Visualizations

The dashboard uses Chart.js to transform portfolio data into responsive visualizations.

Charts help represent:

- Holdings distribution
- Investment allocation
- Stock-wise portfolio composition
- Asset comparison
- Portfolio values

The visualization layer is implemented using:

- `Chart.js`
- `react-chartjs-2`

---

## 📱 Responsive Interface

The platform is designed to work across different screen sizes.

Responsive behavior is applied to:

- Landing-page sections
- Navigation
- Watchlist
- Portfolio cards
- Tables
- Trading windows
- Forms
- Charts
- Funds interface
- Order history

---

# 🎨 Premium Dark Theme

The standard project interface was extended with a custom dark trading-terminal design.

## Design System

| UI Element | Design |
|---|---|
| Main background | Deep slate canvas |
| Cards and panels | Frosted-glass dark containers |
| Positive values | Neon green |
| Negative values | Neon red |
| Primary actions | Electric blue |
| Typography | Modern high-contrast text |
| Charts | Dark-theme compatible visualizations |
| Interactions | Smooth hover animations and transitions |
| Layout | Responsive dashboard grid |

### Primary theme values

```css
--background-primary: #090d16;
--surface-primary: #121824;
--profit-color: #00e676;
--loss-color: #ff1744;
```

The interface includes:

- Glassmorphic containers
- Soft borders and shadows
- Hover micro-interactions
- Theme-aware tables
- Responsive cards
- Modern typography
- Consistent buttons and inputs
- Clear financial-state indicators
- Distinct BUY and SELL experiences

---

# 🏗️ High-Level System Architecture

```mermaid
flowchart LR
    USER[User Browser]

    subgraph Client_Layer[Client Layer]
        LANDING[Marketing Frontend]
        DASHBOARD[Trading Dashboard]
    end

    subgraph API_Layer[Application and API Layer]
        API[Node.js and Express API]
        AUTH[Authentication Module]
        TRADE[Trade Execution Module]
        PORTFOLIO[Portfolio Module]
        FUNDS[Funds Module]
        ORDERS[Order Management Module]
    end

    subgraph Persistence_Layer[Persistence Layer]
        DATABASE[(MongoDB Atlas)]
    end

    USER --> LANDING
    USER --> DASHBOARD

    LANDING --> API
    DASHBOARD --> API

    API --> AUTH
    API --> TRADE
    API --> PORTFOLIO
    API --> FUNDS
    API --> ORDERS

    AUTH --> DATABASE
    TRADE --> DATABASE
    PORTFOLIO --> DATABASE
    FUNDS --> DATABASE
    ORDERS --> DATABASE
```

---

# 🧱 Application Architecture

## 1. Marketing Frontend

The marketing application provides the public-facing experience.

### Responsibilities

- Landing page
- Product information
- Pricing section
- About section
- Support section
- Navigation
- Login and signup redirection
- Responsive public interface
- Zerodha-inspired branding

### Technology

- React.js
- React Router
- Vanilla CSS
- Axios where API communication is required
- Create React App

### Deployment

```text
Vercel
```

---

## 2. Trading Dashboard

The trading dashboard is the primary authenticated user workspace.

### Responsibilities

- Watchlist
- Live simulated prices
- Holdings
- Positions
- Orders
- Funds
- Portfolio analytics
- BUY and SELL windows
- Chart visualizations
- Authentication-aware rendering
- User-specific data management

### Technology

- React.js
- React Router
- Axios
- Chart.js
- react-chartjs-2
- Material UI Icons
- Vanilla CSS
- Create React App

### Deployment

```text
Vercel
```

---

## 3. Backend API

The backend handles authentication, database access, account initialization, and trading business logic.

### Responsibilities

- User signup
- User login
- Password hashing and verification
- JWT generation and validation
- Default account initialization
- User-specific data retrieval
- Holdings management
- Positions management
- Order creation
- Virtual balance management
- Deposit processing
- Withdrawal processing
- BUY-order validation
- SELL-order validation
- MongoDB communication
- Cross-origin request handling
- JSON request and response processing

### Technology

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Tokens
- CORS
- Body Parser
- dotenv

### Deployment

```text
Render
```

---

## 4. Database Layer

MongoDB provides persistent storage for all user and trading data.

### Stored information

- User credentials
- Password hashes
- Account balance
- Holdings
- Positions
- Orders
- Transaction history
- Portfolio information
- User ownership references

### Technology

- MongoDB
- MongoDB Atlas
- Mongoose schemas and models

---

# 🔄 General Request Flow

```mermaid
sequenceDiagram
    participant User
    participant React as React Client
    participant API as Express API
    participant Auth as Authentication Layer
    participant DB as MongoDB

    User->>React: Performs an action
    React->>API: Sends HTTP request
    API->>Auth: Validates user session

    alt Authorized request
        Auth-->>API: Returns authenticated user information
        API->>DB: Reads or updates user data
        DB-->>API: Returns database result
        API-->>React: Sends JSON response
        React-->>User: Updates the interface
    else Unauthorized request
        Auth-->>API: Rejects request
        API-->>React: Sends authentication error
        React-->>User: Displays login or error state
    end
```

---

# 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant Server
    participant Database

    User->>Client: Enters username and password
    Client->>Server: Sends login request
    Server->>Database: Searches for user
    Database-->>Server: Returns user record
    Server->>Server: Verifies password using bcrypt

    alt Valid credentials
        Server->>Server: Generates JWT
        Server-->>Client: Returns authenticated session
        Client-->>User: Opens trading dashboard
    else Invalid credentials
        Server-->>Client: Returns authentication error
        Client-->>User: Displays login error
    end
```

---

# 🛒 Trade Execution Architecture

```mermaid
flowchart TD
    START[User opens trading window]
    INPUT[Select stock, operation and quantity]
    REQUEST[Send transaction request to backend]
    AUTH[Authenticate user]
    TYPE{BUY or SELL?}

    BUY_VALUE[Calculate purchase value]
    FUNDS_CHECK{Sufficient balance?}
    BUY_REJECT[Reject purchase]
    DEDUCT[Deduct virtual funds]
    UPDATE_BUY[Create or update holding]

    HOLDING_CHECK{Sufficient stock quantity?}
    SELL_REJECT[Reject sale]
    REDUCE[Reduce holding quantity]
    CREDIT[Credit sale value]

    ORDER[Create completed order]
    DATABASE[Persist changes in MongoDB]
    RESPONSE[Return API response]
    REFRESH[Refresh balance, holdings and orders]

    START --> INPUT
    INPUT --> REQUEST
    REQUEST --> AUTH
    AUTH --> TYPE

    TYPE -->|BUY| BUY_VALUE
    BUY_VALUE --> FUNDS_CHECK
    FUNDS_CHECK -->|No| BUY_REJECT
    FUNDS_CHECK -->|Yes| DEDUCT
    DEDUCT --> UPDATE_BUY
    UPDATE_BUY --> ORDER

    TYPE -->|SELL| HOLDING_CHECK
    HOLDING_CHECK -->|No| SELL_REJECT
    HOLDING_CHECK -->|Yes| REDUCE
    REDUCE --> CREDIT
    CREDIT --> ORDER

    ORDER --> DATABASE
    DATABASE --> RESPONSE
    RESPONSE --> REFRESH
```

---

# 💰 Funds Management Flow

```mermaid
flowchart TD
    ACTION[User selects deposit or withdrawal]
    AMOUNT[Enter amount]
    VALIDATE[Validate amount]
    TYPE{Transaction type}

    DEPOSIT[Add amount to virtual balance]
    CHECK{Sufficient available balance?}
    REJECT[Reject withdrawal]
    WITHDRAW[Subtract amount from virtual balance]

    SAVE[Save updated balance]
    RETURN[Return updated account state]
    UI[Refresh Funds interface]

    ACTION --> AMOUNT
    AMOUNT --> VALIDATE
    VALIDATE --> TYPE

    TYPE -->|Deposit| DEPOSIT
    DEPOSIT --> SAVE

    TYPE -->|Withdraw| CHECK
    CHECK -->|No| REJECT
    CHECK -->|Yes| WITHDRAW
    WITHDRAW --> SAVE

    SAVE --> RETURN
    RETURN --> UI
```

---

# 🗃️ Conceptual Database Design

The application uses separate Mongoose models for users, holdings, positions, and orders.

```mermaid
erDiagram
    USER ||--o{ HOLDING : owns
    USER ||--o{ POSITION : maintains
    USER ||--o{ ORDER : places

    USER {
        ObjectId id
        string username
        string passwordHash
        number balance
    }

    HOLDING {
        ObjectId id
        ObjectId userId
        string stockSymbol
        number quantity
        number averagePrice
        number currentPrice
    }

    POSITION {
        ObjectId id
        ObjectId userId
        string stockSymbol
        number quantity
        number price
    }

    ORDER {
        ObjectId id
        ObjectId userId
        string stockSymbol
        string transactionType
        number quantity
        number executionPrice
        string status
        datetime createdAt
    }
```

> The diagram represents the conceptual relationship between application entities. Exact field names may differ slightly in the implementation.

---

# 📚 Main Data Models

## User Model

Stores account-related data such as:

- Username or client ID
- Password hash
- Virtual cash balance
- Account ownership information

---

## Holdings Model

Stores portfolio assets owned by a user.

A holding can contain:

- Stock symbol
- Stock name
- Quantity
- Average purchase price
- Current simulated price
- User ownership reference

---

## Positions Model

Stores active or sample position information.

A position can contain:

- Stock symbol
- Product type
- Quantity
- Average price
- Last traded price
- Profit or loss information
- User ownership reference

---

## Orders Model

Stores completed transaction history.

An order can contain:

- Stock symbol
- Transaction type
- Quantity
- Execution price
- Transaction value
- Status
- Timestamp
- User ownership reference

---

# 🧠 Trading Business Rules

## BUY validation

A BUY request is accepted only when:

```text
Available virtual balance >= current stock price × requested quantity
```

The total purchase value is calculated as:

```text
Purchase value = current stock price × quantity
```

After a successful purchase:

```text
Updated balance = existing balance - purchase value
```

If the stock already exists in the user’s holdings, its quantity and average purchase price are updated.

A weighted average can be represented as:

```text
Updated average price =
((old quantity × old average price) +
(new quantity × purchase price))
/
(old quantity + new quantity)
```

---

## SELL validation

A SELL request is accepted only when:

```text
Owned quantity >= requested sell quantity
```

The sale value is calculated as:

```text
Sale value = current stock price × quantity sold
```

After a successful sale:

```text
Updated balance = existing balance + sale value
```

The sold quantity is deducted from the user’s holdings.

---

## Portfolio calculations

### Current holding value

```text
Current value = current market price × quantity
```

### Investment value

```text
Investment value = average purchase price × quantity
```

### Profit or loss

```text
Profit or loss = current value - investment value
```

### Return percentage

```text
Return percentage =
((current value - investment value) / investment value) × 100
```

### Total portfolio value

```text
Total portfolio value =
Sum of current values of all holdings
```

---

# 🧩 Frontend Component Design

The React applications use a component-based architecture.

Typical component categories include:

## Layout components

- Navigation bar
- Dashboard menu
- Main container
- Footer
- Responsive page wrappers

## Trading components

- Watchlist
- BUY window
- SELL window
- Order form
- Holdings table
- Positions table
- Orders table
- Funds panel

## Visualization components

- Portfolio allocation chart
- Holdings chart
- Summary cards
- Profit and loss indicators

## Authentication components

- Login form
- Signup form
- Protected dashboard state
- User-session handling

---

# 🌐 Client-Server Communication

The frontend applications communicate with the backend through HTTP requests using Axios.

The communication layer handles:

- Authentication requests
- User registration
- Login
- Holdings retrieval
- Positions retrieval
- Orders retrieval
- Balance retrieval
- Deposits
- Withdrawals
- BUY requests
- SELL requests

The backend returns JSON responses that are used to update the React interface.

---

# 🛠️ Complete Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React.js 18 | Component-based user-interface development |
| React Router | Client-side navigation |
| Axios | HTTP communication with the backend |
| Vanilla CSS | Custom dark theme and responsive design |
| Material UI Icons | Dashboard icons |
| Chart.js | Data visualization |
| react-chartjs-2 | React integration for Chart.js |
| Create React App | Development and production build system |
| JavaScript ES6+ | Frontend application logic |
| HTML5 | Page structure |
| CSS3 | Layout, animations, styling, and responsiveness |

---

## Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript server runtime |
| Express.js 5 | REST API and business logic |
| Mongoose | MongoDB object modelling |
| bcrypt | Password hashing and verification |
| JSON Web Token | Authentication and session validation |
| CORS | Communication between deployed frontend applications and backend |
| Body Parser | Processing JSON request bodies |
| dotenv | Environment-variable management |
| JavaScript ES6+ | Backend application logic |

---

## Database

| Technology | Purpose |
|---|---|
| MongoDB | NoSQL data persistence |
| MongoDB Atlas | Cloud-hosted production database |
| Mongoose schemas | Data modelling and validation |
| Mongoose models | Database operations |

---

## Deployment and Development

| Technology | Purpose |
|---|---|
| Vercel | Marketing frontend deployment |
| Vercel | Trading dashboard deployment |
| Render | Backend API deployment |
| MongoDB Atlas | Production database hosting |
| Git | Version control |
| GitHub | Source-code hosting |
| npm | Package management |
| VS Code | Development environment |

---

# 📁 Project Structure

```text
zerodha-clone/
│
├── frontend/
│   ├── public/
│   │   └── media/
│   │       └── images/
│   │
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── about/
│   │   │   ├── home/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   └── support/
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── dashboard/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── charts/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── models/
│   ├── schemas/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── package-lock.json
└── README.md
```

> Some folder or file names may vary slightly depending on the final source-code organization.

---

# 🚀 Running the Project Locally

## Prerequisites

Install the following before starting:

- Node.js
- npm
- Git
- MongoDB Community Server or MongoDB Atlas

Verify the installations:

```bash
node --version
npm --version
git --version
```

---

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd zerodha-clone
```

Replace `<your-github-repository-url>` with the actual repository URL.

---

## 2. Configure MongoDB

You can use either:

- Local MongoDB
- MongoDB Atlas

For local MongoDB:

```text
mongodb://127.0.0.1:27017/zerodha
```

---

## 3. Configure the Backend

Navigate to the backend:

```bash
cd backend
```

Create a `.env` file:

```env
MONGO_URL=mongodb://127.0.0.1:27017/zerodha
PORT=3002
JWT_SECRET=your_secure_jwt_secret
```

For MongoDB Atlas, replace `MONGO_URL` with your Atlas connection string.

Example:

```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/zerodha
PORT=3002
JWT_SECRET=your_secure_jwt_secret
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm start
```

The backend will run at:

```text
http://localhost:3002
```

---

## 4. Start the Trading Dashboard

Open a new terminal:

```bash
cd dashboard
npm install
npm start
```

The dashboard will run at:

```text
http://localhost:3001
```

If port `3000` is already occupied, Create React App may ask permission to use another port. Select `Yes`.

---

## 5. Start the Marketing Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

The landing website will run at:

```text
http://localhost:3000
```

---

# 🖥️ Local Application Map

| Application | Local URL |
|---|---|
| Marketing Frontend | `http://localhost:3000` |
| Trading Dashboard | `http://localhost:3001` |
| Backend API | `http://localhost:3002` |
| Local MongoDB | `mongodb://127.0.0.1:27017/zerodha` |

---

# 🎬 Demo Walkthrough

1. Open the marketing website.
2. Click **Signup Now** or **Login**.
3. Continue to the trading dashboard.
4. Sign in using:

```text
Username: Demo
Password: Demo
```

5. Review the dynamically updating watchlist.
6. Select a stock.
7. Open the BUY or SELL terminal.
8. Enter the desired quantity.
9. Submit the transaction.
10. Review the updated virtual balance.
11. Open Holdings to inspect portfolio changes.
12. Open Positions to review position data.
13. Visit Funds to deposit or withdraw virtual cash.
14. Open Orders to review completed trades.
15. View investment distribution through portfolio charts.

---

# 🔒 Security Design

The project includes several important security practices.

## Implemented practices

- Password hashing using bcrypt
- JWT-based authentication
- Protected user operations
- User-specific portfolio data
- Server-side balance validation
- Server-side holding-quantity validation
- Environment variables for sensitive values
- CORS configuration for frontend applications
- Database-backed order records
- Authentication checks before protected operations

## Important production considerations

A real financial platform would require additional protections such as:

- HTTPS-only communication
- Secure token storage
- Refresh-token rotation
- Rate limiting
- Request-schema validation
- Centralized error handling
- Audit logging
- Multi-factor authentication
- Database transactions
- Idempotent order processing
- Role-based access control
- Fraud detection
- KYC verification
- Regulatory compliance
- Exchange-certified order routing
- Secure payment-gateway integration

---

# ⚙️ Deployment Architecture

```mermaid
flowchart TB
    USER[User Browser]

    subgraph Vercel
        LANDING[Marketing Frontend]
        DASHBOARD[Trading Dashboard]
    end

    subgraph Render
        SERVER[Node.js and Express API]
    end

    subgraph MongoDB_Atlas
        DATABASE[(MongoDB Database)]
    end

    USER --> LANDING
    USER --> DASHBOARD

    LANDING --> SERVER
    DASHBOARD --> SERVER
    SERVER --> DATABASE
```

The frontend, dashboard, backend, and database are deployed independently.

This architecture provides:

- Separation of concerns
- Independent deployments
- Easier debugging
- Flexible scaling
- Separate environment variables
- Cleaner frontend-backend boundaries
- Easier future migration
- Independent production builds

---

# 🚢 Deployment Details

## Marketing Frontend

```text
Platform: Vercel
URL: https://zerodha-clone-pied-tau.vercel.app/
```

## Trading Dashboard

```text
Platform: Vercel
URL: https://zerodha-dashboard-nu-two.vercel.app/
```

## Backend API

```text
Platform: Render
URL: https://zerodha-backend-ivqg.onrender.com
```

## Production Database

```text
Platform: MongoDB Atlas
Database Type: Cloud-hosted MongoDB
```

---

# 🧪 Recommended Test Scenarios

## Authentication tests

- Register with valid details
- Register using an existing username
- Login using valid credentials
- Login using an incorrect password
- Attempt access without authentication
- Attempt access using an invalid token
- Confirm password values are hashed

---

## Funds tests

- Deposit a valid amount
- Withdraw a valid amount
- Attempt withdrawal above available balance
- Submit a negative amount
- Submit an empty amount
- Confirm updated balance persists after refresh

---

## BUY-order tests

- Purchase a stock with sufficient balance
- Attempt purchase with insufficient balance
- Submit zero quantity
- Submit negative quantity
- Buy an already owned stock
- Confirm quantity is updated
- Confirm average price is recalculated
- Confirm balance is deducted
- Confirm an order is created

---

## SELL-order tests

- Sell a stock with sufficient quantity
- Attempt to sell more than owned quantity
- Attempt to sell an unowned stock
- Submit zero quantity
- Submit negative quantity
- Confirm holdings are reduced
- Confirm funds are credited
- Confirm an order is created

---

## Portfolio tests

- Confirm total investment calculation
- Confirm current portfolio value
- Confirm profit and loss calculation
- Confirm return percentage
- Confirm values change with simulated prices
- Confirm chart values match holdings data

---

## Data-isolation tests

- Confirm one user cannot access another user’s portfolio
- Confirm one user cannot modify another user’s balance
- Confirm orders belong to the correct user
- Confirm account data persists after logout and login

---

# 📈 Engineering Highlights

This project demonstrates practical experience in:

- Full-stack web development
- React component architecture
- REST API development
- Client-server communication
- Authentication and authorization
- Password security
- JWT implementation
- Financial business-rule validation
- MongoDB data modelling
- Mongoose schema design
- Reusable trading components
- Dynamic portfolio calculations
- Data visualization
- Responsive dashboard design
- Multi-application deployment
- Cross-origin API communication
- Environment configuration
- Production deployment
- Error handling
- State-driven user interfaces

---

# ⚠️ Current Scope and Limitations

This project is intentionally built as a stock-trading simulation.

Current limitations include:

- Stock prices are simulated rather than received from a stock exchange.
- No real-money deposit or withdrawal occurs.
- No actual brokerage account is created.
- No live exchange order is placed.
- No KYC or identity verification is performed.
- Market opening and closing hours may not be enforced.
- Slippage may not be modelled.
- Brokerage fees may not be included.
- Securities transaction taxes may not be included.
- Exchange charges may not be included.
- Settlement cycles may not be modelled.
- The application should not be used for financial decision-making.

---

# 🔮 Future Enhancements

Potential improvements include:

## Trading improvements

- Live market-data API integration
- WebSocket-based price streaming
- Candlestick charts
- Limit orders
- Stop-loss orders
- Market orders
- Order cancellation
- Order modification
- Brokerage and tax calculations
- Market-hours validation
- Stock search
- Multiple watchlists
- Watchlist customization

## Portfolio improvements

- Realized profit and loss
- Unrealized profit and loss
- Sector-wise allocation
- Historical portfolio performance
- Downloadable reports
- Profit-and-loss statements
- Investment filters
- Date-range analytics
- Portfolio risk analysis

## Authentication improvements

- Email verification
- Password reset
- Refresh tokens
- Two-factor authentication
- Session-management dashboard
- Login-history tracking

## Backend improvements

- Request validation
- Database transactions
- Rate limiting
- Redis caching
- Structured logging
- Monitoring
- API documentation
- Automated backups
- Background jobs
- Idempotent transaction processing

## Engineering improvements

- Unit testing
- Integration testing
- End-to-end testing
- Docker containers
- CI/CD pipeline
- Automated deployments
- TypeScript migration
- Centralized error handling
- Performance monitoring
- Code coverage reports

---

# 📸 Project Screenshots

Add your final application screenshots inside a folder such as:

```text
screenshots/
```

Then include them in this section:

```markdown
## Landing Page

![Landing Page](screenshots/landing-page.png)

## Trading Dashboard

![Trading Dashboard](screenshots/dashboard.png)

## Holdings

![Holdings](screenshots/holdings.png)

## Trade Terminal

![Trade Terminal](screenshots/trade-terminal.png)

## Orders

![Orders](screenshots/orders.png)

## Funds

![Funds](screenshots/funds.png)
```

---

# 🛡️ Environment Variable Safety

Never commit the following files:

```text
.env
.env.local
.env.production
```

Add them to `.gitignore`:

```gitignore
.env
.env.local
.env.production
node_modules/
build/
```

Never expose:

- MongoDB connection strings
- JWT secrets
- Database passwords
- Private API keys
- Production credentials

---

# 🧹 Useful Commands

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm start
```

## Create production build

```bash
npm run build
```

## View available npm scripts

```bash
npm run
```

---

# 📜 Disclaimer

This project is created solely for educational, demonstration, and portfolio purposes.

It is:

- Not affiliated with Zerodha Broking Ltd.
- Not an official Zerodha product.
- Not an official Kite product.
- Not a registered brokerage platform.
- Not connected to a live stock exchange.
- Not intended for real-money trading.
- Not intended to provide investment or financial advice.

All trademarks, company names, product names, logos, and visual references belong to their respective owners.

---

# ✅ Project Status

```text
Project Status: Completed and Deployed

Marketing Frontend: Online
Trading Dashboard: Online
Backend API: Online
MongoDB Database: Connected
Authentication: Implemented
Virtual Trading: Implemented
Portfolio Management: Implemented
Funds Management: Implemented
Order History: Implemented
Responsive Dark Theme: Implemented
```

---

# 🌟 Support the Project

If you found this project useful:

- Star the repository
- Explore the live deployment
- Review the system architecture
- Share constructive feedback
- Fork the repository for learning purposes

---

<p align="center">
  <strong>
    Built as a full-stack engineering project combining finance, secure web development, database systems, interactive visualization, and modern UI design.
  </strong>
</p>

<p align="center">
  React.js · Node.js · Express.js · MongoDB · JWT · Chart.js
</p>

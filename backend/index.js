const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
const authRoutes = require("./routes/auth");

const {HoldingsModel}=require("./model/HoldingsModel");
const {PositionsModel}=require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel");

const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app=express();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

// app.get('/addHoldings', async(req,res)=>{
//     let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item)=>{
//     let newHolding=new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     })

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get('/addPositions', async(req,res)=>{
//   let tempPositions=[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//  ];
 
//  tempPositions.forEach((item)=>{
//     let newPosition=new PositionsModel({
//       product:item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss:item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

// JWT Verification Middleware
const jwt = require("jsonwebtoken");
const User = require("./model/User");
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
};

app.get('/allHoldings', authMiddleware, async(req,res)=> {
   try {
     let allHoldings = await HoldingsModel.find({ userId: req.user.id });
     res.json(allHoldings);
   } catch(e) {
     res.status(500).json({ error: e.message });
   }
});

app.get('/allPositions', authMiddleware, async(req,res)=> {
   try {
     let allPositions = await PositionsModel.find({ userId: req.user.id });
     res.json(allPositions);
   } catch(e) {
     res.status(500).json({ error: e.message });
   }
});

app.get('/allOrders', authMiddleware, async(req,res)=> {
   try {
     let allOrders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 });
     res.json(allOrders);
   } catch(e) {
     res.status(500).json({ error: e.message });
   }
});

app.get('/funds', authMiddleware, async(req,res)=> {
   try {
     let user = await User.findById(req.user.id);
     if (!user) return res.status(404).json({ error: "User not found" });
     res.json({ balance: user.balance });
   } catch(e) {
     res.status(500).json({ error: e.message });
   }
});

app.post('/updateFunds', authMiddleware, async(req,res)=> {
   const { amount, action } = req.body; // action: 'add' or 'withdraw'
   try {
     let user = await User.findById(req.user.id);
     if (!user) return res.status(404).json({ error: "User not found" });
     
     const value = Number(amount);
     if (isNaN(value) || value <= 0) {
       return res.status(400).json({ error: "Invalid amount" });
     }

     if (action === 'add') {
       user.balance += value;
     } else if (action === 'withdraw') {
       if (user.balance < value) {
         return res.status(400).json({ error: "Insufficient balance" });
       }
       user.balance -= value;
     } else {
       return res.status(400).json({ error: "Invalid action" });
     }

     await user.save();
     res.json({ message: "Funds updated successfully", balance: user.balance });
   } catch(e) {
     res.status(500).json({ error: e.message });
   }
});

app.post('/newOrder', authMiddleware, async(req,res)=>{
   const { name, qty, price, mode } = req.body;
   try {
     let user = await User.findById(req.user.id);
     if (!user) return res.status(404).json({ error: "User not found" });

     const quantity = Number(qty);
     const stockPrice = Number(price);
     const totalCost = quantity * stockPrice;

     if (mode === "BUY") {
       if (user.balance < totalCost) {
         return res.status(400).json({ error: "Insufficient funds" });
       }
       user.balance -= totalCost;
       await user.save();

       // Update Positions
       let position = await PositionsModel.findOne({ userId: req.user.id, name, product: "CNC" });
       if (position) {
         const newQty = position.qty + quantity;
         const newAvg = ((position.avg * position.qty) + (stockPrice * quantity)) / newQty;
         position.qty = newQty;
         position.avg = newAvg;
         position.price = stockPrice;
         position.isLoss = position.price < position.avg;
         await position.save();
       } else {
         await PositionsModel.create({
           product: "CNC",
           name,
           qty: quantity,
           avg: stockPrice,
           price: stockPrice,
           net: "0.00%",
           day: "0.00%",
           isLoss: false,
           userId: req.user.id
         });
       }

       // Update Holdings
       let holding = await HoldingsModel.findOne({ userId: req.user.id, name });
       if (holding) {
         const newQty = holding.qty + quantity;
         const newAvg = ((holding.avg * holding.qty) + (stockPrice * quantity)) / newQty;
         holding.qty = newQty;
         holding.avg = newAvg;
         holding.price = stockPrice;
         await holding.save();
       } else {
         await HoldingsModel.create({
           name,
           qty: quantity,
           avg: stockPrice,
           price: stockPrice,
           net: "0.00%",
           day: "0.00%",
           userId: req.user.id
         });
       }
     } else if (mode === "SELL") {
       // Check positions
       let position = await PositionsModel.findOne({ userId: req.user.id, name, product: "CNC" });
       if (!position || position.qty < quantity) {
         return res.status(400).json({ error: "Insufficient quantity in Positions to sell" });
       }

       position.qty -= quantity;
       if (position.qty === 0) {
         await PositionsModel.deleteOne({ _id: position._id });
       } else {
         position.price = stockPrice;
         position.isLoss = position.price < position.avg;
         await position.save();
       }

       // Update Holdings
       let holding = await HoldingsModel.findOne({ userId: req.user.id, name });
       if (holding) {
         holding.qty = Math.max(0, holding.qty - quantity);
         if (holding.qty === 0) {
           await HoldingsModel.deleteOne({ _id: holding._id });
         } else {
           holding.price = stockPrice;
           await holding.save();
         }
       }

       user.balance += totalCost;
       await user.save();
     } else {
       return res.status(400).json({ error: "Invalid order mode" });
     }

     // Save to Orders
     const newOrder = await OrdersModel.create({
       name,
       qty: quantity,
       price: stockPrice,
       mode,
       userId: req.user.id,
       createdAt: new Date()
     });

     res.json({ message: "Order processed successfully", balance: user.balance, order: newOrder });
   } catch(e) {
     res.status(500).json({ error: e.message });
   }
});

app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}!`);
    mongoose.connect(uri)
      .then(() => console.log("DB connected!"))
      .catch((err) => console.log("DB connection error:", err));
});
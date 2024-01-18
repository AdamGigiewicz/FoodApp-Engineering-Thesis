const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors({origin: true}));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// API endpoints
app.get("/", (req, res) => {
  return res.send("Hello World!");
});

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

const productRoute = require("./routes/products");
app.use("/api/products", productRoute);

// Handle CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

exports.app = functions.https.onRequest(app);

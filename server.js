// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

// Configure CORS
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/v1/auth/", require("./routes/authRoutes.js"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome To Node server </h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

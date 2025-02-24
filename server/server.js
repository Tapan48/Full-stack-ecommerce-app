const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // Import user routes
const productRoutes = require("./routes/productRoutes");
const path = require("path");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hellos World");
});

app.use("/api/auth", authRoutes); //// base url is /api/auth and the routes are defined in authRoutes.js
app.use("/api/user", userRoutes); //// base url is /api/user and the routes are defined in userRoutes.js

app.use("/api/products", productRoutes); //// base url is /api/products and the routes are defined in productRoutes.js

app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/// client sends token in header as Authorization: Bearer <token>
/// server verifies the token and sets req.userId to the user id
/// next middleware can use req.userId to get the user id

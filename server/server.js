const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const authRoutes = require("./routes/auth");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hellos World");
});

app.use("/api/auth", authRoutes); //// base url is /api/auth and the routes are defined in authRoutes.js

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

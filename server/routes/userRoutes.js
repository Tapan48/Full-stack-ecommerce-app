const express = require("express");
const auth = require("../middleware/auth"); // Middleware to protect routes
const { getProfile } = require("../controllers/userController");

const router = express.Router();

router.get("/profile", auth, getProfile); // Protected route

module.exports = router;

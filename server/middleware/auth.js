const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    console.log("auth middleware called");
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("middleware token", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    req.userId = decoded.userId;
    console.log("req.userId", req.userId);
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = auth;

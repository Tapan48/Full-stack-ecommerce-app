const User = require("../models/User"); // Import User model

const getProfile = async (req, res) => {
    try {
        // Fetch user data from database using req.userId (set in auth middleware)
        const user = await User.findById(req.userId).select("-password"); // Exclude password

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getProfile };

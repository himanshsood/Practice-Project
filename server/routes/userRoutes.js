const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/jwtMiddlewares").validateToken;

const {
    registerUser,
    loginUser,
    userProfile
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protect /profile route with validateToken middleware
router.post("/profile", validateToken, userProfile);

module.exports = router;

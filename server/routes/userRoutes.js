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
router.get("/profile", userProfile);


module.exports = router;

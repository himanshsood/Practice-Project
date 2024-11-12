const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/jwtMiddlewares").validateToken;


const {
    registerUser,
    loginUser,
    userProfile
} = require("../controllers/userController");
const { generateToken } = require("../middleware/jwtMiddlewares");

router.post("/register", registerUser);
router.post("/login" ,loginUser);


// Protect /profile route with validateToken middleware
router.get("/profile", validateToken,userProfile);


module.exports = router;

const express = require("express");
const router = express.Router();

const authController = require("../Controller/auth_controller");

const authMiddleware = require("../Middleware/auth_middleware");

// signup and signin
router.post("/signup", authController.signup);
router.get("/signin", authController.signin);

// middlewares + controllers
router.get("/content", authMiddleware.verify_jwt, authController.content);

module.exports = router;

const { register, login, getAllUsers } = require('../Controller/AuthController')

const express = require('express')

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers)

module.exports = router;
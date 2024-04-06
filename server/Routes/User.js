const User= require('../Controllers/User')
const express = require('express')
const {verifyToken} = require('../Utils/Verify')
const router  = express.Router()

router.post("/uploadpic", verifyToken, User.uploadpic)

module.exports = router;
const User= require('../Controllers/User')
const express = require('express')
const {verifyToken} = require('../Utils/Verify')
const router  = express.Router()
const formidable = require('express-formidable')
router.put("./updateprofile" , verifyToken , User.updateprofile)
router.post("/uploadpic", verifyToken, formidable(), User.uploadpic)

module.exports = router;
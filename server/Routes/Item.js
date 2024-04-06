const Item = require('../Controllers/Item')
const express = require('express')
const {verifyToken , verifyAdmin} = require('../Utils/Verify')
const router  = express.Router()

router.post("/create", verifyToken, verifyAdmin, Item.create)

module.exports = router;
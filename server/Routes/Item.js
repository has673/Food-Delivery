const Item = require('../Controllers/Item')
const express = require('express')
const {verifyToken , verifyAdmin} = require('../Utils/Verify')

const formidable = require('express-formidable')

const router  = express.Router()



router.post("/create", verifyToken, formidable(),  Item.create)

module.exports = router;
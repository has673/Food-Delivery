const Cart = require('../Controllers/Cart')
const express = require('express')
const {verifyToken , verifyAdmin} = require('../Utils/Verify')

const formidable = require('express-formidable')

const router  = express.Router()



router.post("/addtocart", verifyToken,  Cart.addToCart)

module.exports = router;
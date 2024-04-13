const Cart = require('../Controllers/Cart')
const express = require('express')
const {verifyToken} = require('../Utils/Verify')

const formidable = require('express-formidable')

const router  = express.Router()



router.post("/addtocart/:productId", verifyToken,  Cart.addToCart)

router.get("/getcart", verifyToken,  Cart.getCart)

router.delete('/clearcart', verifyToken, Cart.clearCart)
module.exports = router;
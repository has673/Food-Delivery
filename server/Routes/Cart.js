const Cart = require('../Controllers/Cart')
const express = require('express')
const {verifyToken} = require('../Utils/Verify')



const router  = express.Router()



router.post("/addtocart/:productId", verifyToken,  Cart.addToCart)

router.get("/getcart", verifyToken,  Cart.getCart)

router.delete('/clearcart', verifyToken, Cart.clearCart)
router.get('/count', Cart.countItemsInCart)
module.exports = router;
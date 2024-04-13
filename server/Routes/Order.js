const Order = require('../Controllers/Order')
const express = require('express')
const { verifyToken } = require('../Utils/Verify')
const router = express.Router()

router.get('/allorders', verifyToken , Order.getorder)
router.post('/makeorder', verifyToken , Order.makeorder)
const Item = require('../Controllers/Item')
const express = require('express')
const {verifyToken } = require('../Utils/Verify')

const formidable = require('express-formidable')

const router  = express.Router()



router.post("/create", verifyToken, formidable(),  Item.create)
router.get('/get', Item.get)
router.get('/getphoto/:id', Item.getPhoto)
router.get('/getone/:id', Item.singleitem)

module.exports = router;
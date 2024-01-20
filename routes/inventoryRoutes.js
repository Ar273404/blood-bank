const express = require('express')
const authMiddelware = require('../middleware/authMiddelware')
const { createinventoryController, getinventoryController } = require('../controllers/inventoryController')

const router = express.Router()

//routes
//add inventory || post
router.post('/create-inventory',createinventoryController,authMiddelware);

//get all blood records 

router.get("/get-inventory", getinventoryController, authMiddelware);

module.exports = router
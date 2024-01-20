const express = require('express')
const { testController } = require('../controllers/testController')

//router object

const router = express.Router()

//routes

router.get('/',testController);            //control statement write in controller folder ex=(req,res) then use here

//export
module.exports = router;
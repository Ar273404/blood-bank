const express = require('express')
const { registerController, loginController, currentuserController } = require('../controllers/authController');
const authMiddelware = require('../middleware/authMiddelware');

const router = express.Router()

//routes

//for register
router.post('/register', registerController);

//for login
router.post('/login', loginController);

//get current user 
router.get('/current-user',authMiddelware,currentuserController)

module.exports = router
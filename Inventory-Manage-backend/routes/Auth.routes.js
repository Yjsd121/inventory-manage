const express = require('express')
const router = express.Router()
const controller = require('../controllers/Auth.controller')

router.post('/login', controller.authlogin)
router.post('/register', controller.registerUser)
module.exports = router

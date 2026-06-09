const express = require('express')
const router = express.Router()
const controller = require('../controllers/kips.controller')

router.get('/:bd', controller.getKips)

module.exports = router

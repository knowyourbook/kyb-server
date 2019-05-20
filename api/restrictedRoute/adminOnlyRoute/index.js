const express = require('express')

const adminRoute = require('./adminRoute')

const router = express.Router()

router.use('/admins', adminRoute)

module.exports = router

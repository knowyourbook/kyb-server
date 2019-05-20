const express = require('express')

const adminRoute = require('./adminRoute')
const schoolRoute = require('./schoolRoute')

const router = express.Router()

router.use('/admins', adminRoute)
router.use('/schools', schoolRoute)

module.exports = router

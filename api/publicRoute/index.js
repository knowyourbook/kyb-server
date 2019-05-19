const express = require('express')

const schoolRoute = require('./schoolRoute')
const bookRoute = require('./bookRoute')
const adminRoute = require('./adminRoute')

const router = express.Router()

router.use('/schools', schoolRoute)
router.use('/books', bookRoute)
router.use('/admins', adminRoute)

module.exports = router

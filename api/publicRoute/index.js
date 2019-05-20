const express = require('express')

const schoolRoute = require('./schoolRoute')
const bookRoute = require('./bookRoute')
const adminRoute = require('./adminRoute')
const studentRoute = require('./studentRoute')

const router = express.Router()

router.use('/schools', schoolRoute)
router.use('/books', bookRoute)
router.use('/admins', adminRoute)
router.use('/students', studentRoute)

module.exports = router

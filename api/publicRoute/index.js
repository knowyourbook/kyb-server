const express = require('express')

const schoolRoute = require('./schoolRoute')
const bookRoute = require('./bookRoute')

const router = express.Router()

router.use('/schools', schoolRoute)
router.use('/books', bookRoute)

module.exports = router

const express = require('express')

const adminOnlyRoute = require('./adminOnlyRoute')
const { authenticateAdmin } = require('../middleware/authenticate')

const router = express.Router()

router.use('/', authenticateAdmin, adminOnlyRoute)

module.exports = router
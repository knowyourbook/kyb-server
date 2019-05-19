const express = require('express');

const schoolRoute = require('./schoolRoute');

const router = express.Router();

router.use('/schools', schoolRoute);

module.exports = router;
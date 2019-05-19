const express = require('express')

const schoolDb = require('../../data/helpers/school')

const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const schools = await schoolDb.get()
    res.status(200).json(schools)
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = router

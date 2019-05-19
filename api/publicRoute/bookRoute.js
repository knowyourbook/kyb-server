const express = require('express')

const bookDB = require('../../data/helpers/book')

const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const books = await bookDB.get()
    res.status(200).json(books)
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = router

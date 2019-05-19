const express = require('express')

const bookDB = require('../../data/helpers/book')

const router = express.Router()
router
  .get('/', async (req, res) => {
    try {
      const books = await bookDB.get()
      res.status(200).json(books)
    } catch (err) {
      res.sendStatus(500)
    }
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params

    try {
      const book = await bookDB.get(Number(id))

      if (book) {
        res.status(200).json(book)
      } else {
        res
          .status(404)
          .json({ error: true, message: 'Cannot find book with that ID' })
      }
    } catch (err) {
      res
        .status(500)
        .json({ error: true, message: 'Failed to fetch book info' })
    }
  })
  .get('/:id/quotes', async (req, res) => {
    const { id } = req.params

    try {
      const quotes = await bookDB.getQuotes(Number(id))
      res.status(200).json(quotes)
    } catch (err) {
      res
        .status(500)
        .json({ error: true, message: 'Failed to fetch quotes info' })
    }
  })
module.exports = router

const express = require('express')

const schoolDb = require('../../data/helpers/school')

const router = express.Router()
router
  .get('/', async (req, res) => {
    try {
      const schools = await schoolDb.get()
      res.status(200).json(schools)
    } catch (err) {
      res.sendStatus(500)
    }
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)

    try {
      const school = await schoolDb.get(Number(id))

      if (school) {
        res.status(200).json(school)
      } else {
        res
          .status(404)
          .json({ error: true, message: 'Cannot find school with that ID' })
      }
    } catch (err) {
      res
        .status(500)
        .json({ error: true, message: 'Failed to fetch school info' })
    }
  })

module.exports = router

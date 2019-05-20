const express = require('express')

const adminDb = require('../../../data/helpers/admin')
const { decodeToken } = require('../../auth/token')
const { validateUserUpdate } = require('../../middleware/validate')

const router = express.Router()
router
  .get('/', async (req, res) => {
    try {
      const { id } = await decodeToken(req.headers.authorization)
      const admin = await adminDb.get(Number(id))

      if (admin) {
        res.status(200).json(admin)
      } else {
        res
          .status(404)
          .json({ error: true, message: 'Cannot find admin with that ID' })
      }
    } catch (err) {
      res.status(500).json({ error: true, message: 'Failed to fetch admin' })
    }
  })
  .put('/', validateUserUpdate, async (req, res) => {
    try {
      const { id } = await decodeToken(req.headers.authorization)
      const { user } = req.body

      const updated = await adminDb.update(user, Number(id))

      if (updated === 1) {
        res.sendStatus(204)
      } else {
        res
          .status(404)
          .json({ error: true, message: 'Cannot update admin with that ID' })
      }
    } catch (err) {
      res.status(500).json({ error: true, message: 'Failed to update admin' })
    }
  })

module.exports = router

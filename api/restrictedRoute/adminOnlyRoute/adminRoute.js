const express = require('express')

const adminDb = require('../../../data/helpers/admin')
const { decodeToken } = require('../../auth/token')

const router = express.Router()
router
  .get('/', async (req, res) => {
    const { id } = await decodeToken(req.headers.authorization)

    try {
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

module.exports = router

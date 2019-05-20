const express = require('express')

const adminDb = require('../../../data/helpers/admin')
const schoolDb = require('../../../data/helpers/school')
const { decodeToken } = require('../../auth/token')
const { validateUserUpdate } = require('../../middleware/validate')

const router = express.Router()
router
  .get('/', async (req, res) => {
    try {
      const { currentUser } = req.body
      const admin = await adminDb.get(currentUser.id)

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
      const { user, currentUser } = req.body

      const updated = await adminDb.update(user, currentUser.id)

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
  .delete('/', async (req, res) => {
    try {
      const { currentUser } = req.body

      const { school_id } = await adminDb.getSchoolId(currentUser.id)

      await adminDb.remove(currentUser.id)
      const deletedSchool = await schoolDb.remove(school_id)

      if (deletedSchool === 1) {
        res.sendStatus(204)
      } else {
        res
          .status(404)
          .json({ error: true, message: 'Cannot remove admin' })
      }
    } catch (err) {
      res.status(500).json({ error: true, message: 'Failed to remove admin' })
    }
  })

module.exports = router

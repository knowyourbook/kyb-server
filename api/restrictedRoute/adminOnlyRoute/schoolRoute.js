const express = require('express')

const schoolDb = require('../../../data/helpers/school')
const adminDb = require('../../../data/helpers/admin')
const { validateSchoolUpdate } = require('../../middleware/validate')

const router = express.Router()
router.put('/', validateSchoolUpdate, async (req, res) => {
  try {
    const { currentUser, school } = req.body

    const { school_id } = await adminDb.getSchoolId(currentUser.id)
    const updated = await schoolDb.update(school, school_id)

    if (updated === 1) {
      res.sendStatus(204)
    } else {
      res.status(404).json({ error: true, message: 'Cannot update school' })
    }
  } catch (err) {
    res.status(500).json({ error: true, message: 'Failed to update school' })
  }
})

module.exports = router

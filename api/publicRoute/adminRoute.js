const express = require('express')

const adminDb = require('../../data/helpers/admin')
const schoolDb = require('../../data/helpers/school')
const validate = require('../middleware/validate')

const router = express.Router()
router.post('/', validate.school, validate.user, async (req, res) => {
  const { school, user } = req.body
  try {
    const schoolId = await schoolDb.insert(school)
    const adminId = await adminDb.insert({
      ...user,
      school_id: schoolId[0]
    })
    res.status(200).json({id: adminId})
  } catch (err) {
    res.status(500).json({error: true, message: 'Failed to create account'})
  }
})

module.exports = router

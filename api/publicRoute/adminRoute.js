const express = require('express')
const bcrypt = require('bcryptjs')

const adminDb = require('../../data/helpers/admin')
const schoolDb = require('../../data/helpers/school')
const validate = require('../middleware/validate')
const { generateToken } = require('../auth/token')

const router = express.Router()
router.post('/register', validate.school, validate.user, async (req, res) => {
  const { school, user } = req.body
  user.password = bcrypt.hashSync(user.password, 12)
  try {
    const schoolId = await schoolDb.insert(school)
    const adminId = await adminDb.insert({
      ...user,
      school_id: schoolId[0]
    })
    const token = generateToken({ id: adminId[0] }, 'ADMIN')
    res.status(201).json({ id: adminId[0], token })
  } catch (err) {
    res.status(500).json({ error: true, message: 'Failed to create account' })
  }
})

module.exports = router

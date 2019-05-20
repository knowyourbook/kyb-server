const express = require('express')
const bcrypt = require('bcryptjs')

const studentDb = require('../../data/helpers/student')
const validate = require('../middleware/validate')
const { generateToken } = require('../auth/token')

const router = express.Router()
router
  .post('/login', validate.userlogin, async (req, res, next) => {
    const { username, password, role } = req.body

    try {
      const matchUser = await studentDb.getByUsername(username)

      if (matchUser && bcrypt.compareSync(password, matchUser.password)) {
        const token = generateToken({ id: matchUser.id }, role)
        res.status(200).json({ token })
      } else {
        res.status(400).send('Invalid username or password')
      }
    } catch (err) {
      res
        .status(500)
        .json({ error: true, message: 'Failed to login into account' })
    }
  })

module.exports = router

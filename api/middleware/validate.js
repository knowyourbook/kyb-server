const schoolLevelDb = require('../../data/helpers/school_level')
const adminDb = require('../../data/helpers/admin')
const studentDb = require('../../data/helpers/student')

module.exports = {
  school: async function(req, res, next) {
    const { school } = req.body
    if (!school) {
      res.status(400).json({ error: true, message: 'Missing required info' })
    }

    const { name, level_id, city, state } = school

    if (!name || !level_id || !city || !state) {
      res.status(400).json({ error: true, message: 'Missing required info' })
    } else if (
      typeof name !== 'string' ||
      typeof level_id !== 'number' ||
      typeof city !== 'string' ||
      typeof state !== 'string'
    ) {
      res.status(400).json({ error: true, message: 'Invalid input type' })
    } else {
      try {
        const foundLevel = await schoolLevelDb.get(level_id)
        if (!foundLevel) {
          res.status(400).json({ error: true, message: 'Invalid school level' })
        } else {
          next()
        }
      } catch (err) {
        res
          .status(500)
          .json({ error: true, message: 'Failed to find school level' })
      }
    }
  },
  user: async function(req, res, next) {
    const { user } = req.body
    if (!user) {
      res.status(400).json({ error: true, message: 'Missing required info' })
    }

    const { firstname, lastname, username, password } = user

    if (!firstname || !lastname || !username || !password) {
      res.status(400).json({ error: true, message: 'Missing required info' })
    } else if (
      typeof firstname !== 'string' ||
      typeof lastname !== 'string' ||
      typeof username !== 'string' ||
      typeof password !== 'string'
    ) {
      res.status(400).json({ error: true, message: 'Invalid input type' })
    } else if (password.length <= 6) {
      res.status(400).json({ error: true, message: 'Invalid password' })
    } else {
      try {
        const admin = await adminDb.getByUsername(username)
        const student = await studentDb.getByUsername(username)

        if (admin || student) {
          res.status(400).json({ error: true, message: 'Username is taken' })
        } else {
          next()
        }
      } catch (err) {
        res
          .status(500)
          .json({ error: true, message: 'Failed to verify username' })
      }
    }
  },
  userlogin: async function(req, res, next) {
    const { username, password } = req.body

    const userRole = req.originalUrl.includes('admins') ? 'ADMIN' : 'STUDENT'

    if (!username || !password) {
      res.status(400).json({ error: true, message: 'Missing required info' })
    } else if (typeof username !== 'string' || typeof password !== 'string') {
      res.status(400).json({ error: true, message: 'Invalid input type' })
    } else {
      req.body.role = userRole
      next()
    }
  }
}

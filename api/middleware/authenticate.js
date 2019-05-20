const { verifyToken } = require('../auth/token')

module.exports = {
  authenticate: (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
      res.status(401).send('Unauthorized user')
    } else if (verifyToken(token)) {
      req.body.role = 'admin'
      next()
    } else if (verifyToken(token, 'STUDENT')) {
      req.body.role = 'board'
      next()
    } else {
      res.status(401).send('Invalid token')
    }
  },
  authenticateAdmin: (req, res, next) => {
    const { role } = req.body
    if (role !== 'admin') {
      res.status(401).send('Unauthorized user')
    } else {
      next()
    }
  }
}

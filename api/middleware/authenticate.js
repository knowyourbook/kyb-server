const { verifyToken, decodeToken } = require('../auth/token')

module.exports = {
  authenticate: async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
      res.status(401).send('Unauthorized user')
    } else if (verifyToken(token)) {
      const user = await decodeToken(token)
      req.body.currentUser = user
      next()
    } else {
      res.status(401).send('Invalid token')
    }
  },
  authenticateAdmin: (req, res, next) => {
    const { currentUser } = req.body
    if (currentUser.role !== 'admin') {
      res.status(401).send('Unauthorized user')
    } else {
      next()
    }
  }
}

require('dotenv').config()
const jwt = require('jsonwebtoken')

const secret = {
  admin: 'admin_secret',
  student: 'student_secret'
}
const options = {
  expiresIn: '1h',
  jwtid: '12345' //jti
}

const generateToken = user => jwt.sign(user, secret[user.role], options)

const decodeToken = token => jwt.decode(token)

const verifyToken = async token => {
  const { role } = decodeToken(token)
  return jwt.verify(token, secret[role], (err, decoded) => {
    return !err
  })}

module.exports = {
  generateToken,
  verifyToken,
  decodeToken
}

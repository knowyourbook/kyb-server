require('dotenv').config()
const express = require('express')

const apiConfig = require('./config/apiConfig')

const server = express()
apiConfig(server)
server.use(express.json())

server.get('/', (req, res) => res.send('Welcome to Know Your Book API'))

module.exports = server

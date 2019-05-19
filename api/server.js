require('dotenv').config()
const express = require('express')

const apiConfig = require('./config/apiConfig')
const publicRoute = require('../api/publicRoute')

const server = express()
apiConfig(server)
server.use(express.json())

server.get('/', (req, res) => res.send('Welcome to Know Your Book API'))

server.use('/api', publicRoute)

module.exports = server

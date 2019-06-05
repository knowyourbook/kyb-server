const server = require('./api/server')

// test GitHub account
const port = process.env.PORT || 4000

server.listen(port, () => console.log(`Server listening on ${port}`))

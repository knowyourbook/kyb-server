const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

module.exports = server => {
  server.use(cors());
  server.use(morgan("short"));
  server.use(helmet());
};
const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: process.env.HOST_NAME,
  port: process.env.PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.USER_NAME,
  password: process.env.PW,
});

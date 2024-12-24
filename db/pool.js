const { Pool } = require("pg");
require("dotenv").config();

// module.exports = new Pool({
//   host: process.env.HOST_NAME,
//   port: process.env.PORT,
//   database: process.env.DATABASE_NAME,
//   user: process.env.USER_NAME,
//   password: process.env.PW,
//   ssl:false,
// });


// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: process.env.CONNECTION_URI
});


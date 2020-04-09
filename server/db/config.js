const env = require('dotenv').config().parsed

module.exports = {
  development: {
    dialect: 'postgres',
    multipleStatements: true,
    host: env.DB_HOST,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
  }
}

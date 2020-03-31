const Sequelize = require('sequelize')
const env = require('../config/env')

const DATABASE_URL = `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
console.log('########################################', DATABASE_URL)
console.log(env)
const database = new Sequelize(DATABASE_URL)

module.exports = database

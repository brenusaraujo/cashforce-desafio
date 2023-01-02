require('dotenv').config();

const options = {
  host: process.env.MYSQL_HOST || 'db',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DB_NAME || 'cashforce',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  dialect: 'mysql',
  charset: 'latin1',
  collate: 'latin1_swedish_ci',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG === 'true',
};

module.exports = {
  development: options,
  test: options,
  production: options,
};
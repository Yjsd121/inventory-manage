const MySQL = require('mysql2')
const connection = MySQL.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect(err => {
  if (err) {
    console.log(err)
  } else {
    console.log('MySQL connectión is successfully ')
  }
})

module.exports = connection

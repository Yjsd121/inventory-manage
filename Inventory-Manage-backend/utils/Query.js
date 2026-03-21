const connection = require('./db.js')

function Query (sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, rows) => {
      if (err) reject(err)
      else resolve(rows)
    })
  })
}

module.exports = Query

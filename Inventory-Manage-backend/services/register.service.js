const Query = require('../utils/Query')

exports.insertUser = async (
  names,
  lastnames,
  email,
  password
) => {
  return await Query(
    `INSERT INTO users 
    (
      User_names,
      User_lastnames,
      User_email,
      User_pass
    )
    VALUES (?,?,?,?)`,
    [names, lastnames, email, password]
  )
}

const Query = require('../utils/Query')

exports.insertUser = async (
  Id,
  names,
  lastnames,
  email,
  password
) => {
  return await Query(
    `INSERT INTO users 
    (
      ClientID,
      User_names,
      User_lastnames,
      User_email,
      User_pass
    )
    VALUES (?,?,?,?,?)`,
    [Id, names, lastnames, email, password]
  )
}

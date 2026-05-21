const Query = require('../utils/Query')

exports.getusers = async (
  email
) => {
  return await Query('SELECT * FROM users WHERE User_email = ?', [email])
}

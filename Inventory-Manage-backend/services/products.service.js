const Query = require('../utils/Query')

exports.getAllProducts = async (search) => {
  if (search) {
    return await Query(
      `Select * FROM products
      Where slug LIKE ?
      `, [`%${search}%`]
    )
  }
  return await Query('SELECT * FROM products')
}

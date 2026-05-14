const Query = require('../utils/Query')

exports.getAllOrders = async (search) => {
  if (search) {
    return await Query(
      `Select * FROM orders
      Where slug LIKE ?
      `, [`%${search}%`]
    )
  }
  return await Query('SELECT * FROM orders')
}

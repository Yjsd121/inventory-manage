const Query = require('../utils/Query')

exports.getAllOrders = async () => {
  return await Query('SELECT * FROM orders')
}

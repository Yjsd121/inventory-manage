const Query = require('../utils/Query')

exports.getAllProducts = async () => {
  return await Query('SELECT * FROM products')
}

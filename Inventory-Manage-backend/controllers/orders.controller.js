const orderService = require('../services/orders.service')

exports.getOrders = async (req, res) => {
  try {
    const data = await orderService.getAllOrders()
    res.json({ products: data })
  } catch (error) {
    res.status(500).json({ error: 'Error servidor' })
  }
}

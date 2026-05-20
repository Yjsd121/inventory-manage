const orderService = require('../services/orders.service')

exports.getOrders = async (req, res) => {
  try {
    const { search } = req.query

    const data = await orderService.getAllOrders(search)

    res.json({ products: data })
  } catch (error) {
    res.status(500).json({ error: 'Error servidor' })
  }
}

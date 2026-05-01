const productService = require('../services/products.service')

exports.getProducts = async (req, res) => {
  try {
    const data = await productService.getAllProducts()
    res.json({ Products: data })
  } catch (error) {
    res.status(500).json({ error: 'Error servidor' })
  }
}

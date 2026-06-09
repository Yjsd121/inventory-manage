const productService = require('../services/products.service')

exports.getProducts = async (req, res) => {
  try {
    const { search } = req.query

    const data = await productService.getAllProducts(search)

    res.json({
      Products: data
    })
  } catch (error) {
    res.status(500).json({
      error: 'Error servidor'
    })
  }
}

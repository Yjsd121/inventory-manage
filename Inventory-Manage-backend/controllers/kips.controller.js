const kipsService = require('../services/kips.service')

exports.getKips = async (req, res) => {
  const { bd } = req.params

  try {
    const data = await kipsService.getKipsData(bd)
    res.json(data)
  } catch (error) {
    if (error.message === 'INVALID_BD') {
      return res.status(400).json({ error: 'bd no válida' })
    }
    res.status(500).json({ error: 'Error servidor' })
  }
}

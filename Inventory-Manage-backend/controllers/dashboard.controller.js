const dashboardService = require('../services/dashboard.service')

exports.getDashboard = async (req, res) => {
  try {
    const data = await dashboardService.getDashboardData()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error servidor' })
  }
}

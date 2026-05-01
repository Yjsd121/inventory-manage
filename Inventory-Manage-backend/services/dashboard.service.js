const Query = require('../utils/Query')

exports.getDashboardData = async () => {
  const Catp = await Query(
    'SELECT count(*) as Total, Category FROM inventory_manage.products GROUP BY Category'
  )

  const Cato = await Query(
    'SELECT count(*) as Total, Status FROM inventory_manage.Orders GROUP BY Status'
  )

  return {
    P: Catp,
    O: Cato
  }
}

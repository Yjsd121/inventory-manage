const Query = require('../utils/Query')

exports.getKipsData = async (bd) => {
  let table
  let statuses

  if (bd === 'products') {
    table = 'products'
    statuses = ['available', 'low_stock', 'out_stock']
  } else if (bd === 'orders') {
    table = 'orders'
    statuses = ['pending', 'canceled', 'closed']
  } else if (bd === 'Dashboard') {
    const tproducts = await Query('SELECT count(*) as T_products from inventory_manage.products')
    const tsales = await Query('SELECT count(*) as T_Sales from inventory_manage.orders WHERE Status = \'closed\'')
    const torders = await Query('SELECT count(*) as T_orders from inventory_manage.orders')
    const tpending = await Query('SELECT count(*) as T_sales from inventory_manage.orders WHERE Status = \'pending\'')

    return {
      labels: [
        { id: 1, name: 'TotalProducts', value: tproducts[0]?.T_products || 0 },
        { id: 2, name: 'Sales', value: tsales[0]?.T_Sales || 0 },
        { id: 3, name: 'Orders', value: torders[0]?.T_orders || 0 },
        { id: 4, name: 'Pending', value: tpending[0]?.T_sales || 0 }
      ]
    }
  } else {
    throw new Error('INVALID_BD')
  }

  const total = await Query(
    `SELECT count(*) as total FROM inventory_manage.${table}`
  )

  const results = await Promise.all(
    statuses.map(status =>
      Query(
        `SELECT count(*) as total 
          FROM inventory_manage.${table} 
          WHERE Status = '${status}'`
      )
    )
  )

  return {
    labels: [
      {
        id: 1,
        name: `Total ${table}`,
        value: total[0]?.total || 0
      },
      ...statuses.map((status, i) => ({
        id: i + 2,
        name: status,
        value: results[i][0]?.total || 0
      }))
    ]
  }
}

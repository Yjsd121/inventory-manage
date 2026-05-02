const Query = require('../utils/Query')

const TABLES = {
  products: {
    name: 'inventory_manage.products',
    statuses: ['available', 'low_stock', 'out_stock']
  },
  orders: {
    name: 'inventory_manage.orders',
    statuses: ['pending', 'canceled', 'closed']
  }
}

exports.getKipsData = async (bd) => {
  bd = bd.toLowerCase()

  if (bd === 'dashboard') {
    const tproducts = await Query(
      'SELECT COUNT(*) as total FROM inventory_manage.products'
    )

    const tsales = await Query(
      'SELECT COUNT(*) as total FROM inventory_manage.orders WHERE Status = ?',
      ['closed']
    )

    const torders = await Query(
      'SELECT COUNT(*) as total FROM inventory_manage.orders'
    )

    const tpending = await Query(
      'SELECT COUNT(*) as total FROM inventory_manage.orders WHERE Status = ?',
      ['pending']
    )

    return {
      labels: [
        { id: 1, name: 'TotalProducts', value: tproducts[0]?.total || 0 },
        { id: 2, name: 'Sales', value: tsales[0]?.total || 0 },
        { id: 3, name: 'Orders', value: torders[0]?.total || 0 },
        { id: 4, name: 'Pending', value: tpending[0]?.total || 0 }
      ]
    }
  }

  const config = TABLES[bd]

  if (!config) {
    throw new Error('INVALID_BD')
  }

  const { name: tableName, statuses } = config

  const total = await Query(
    `SELECT COUNT(*) as total FROM ${tableName}`
  )

  const results = await Promise.all(
    statuses.map(status =>
      Query(
        `SELECT COUNT(*) as total FROM ${tableName} WHERE Status = ?`,
        [status]
      )
    )
  )

  return {
    labels: [
      {
        id: 1,
        name: `Total ${bd}`,
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

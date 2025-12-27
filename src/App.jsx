import './App.css'
import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
// import { Inventory } from './components/Show/inventory'

// Esto si funciona
import elementos from './mocks/Elementos.json'
import { ShowCards } from './components/Cards/Cards'
import ordersss from './mocks/Orders.json'
import { ShowOrders } from './components/orders/Orders'

function Vistas ({ valor, elementss, orderss }) {
  if (valor === 0) {
    return <h2>Dashboards</h2>
  } else if (valor === 1) {
    return <ShowCards elementss={elementss} />
  } else if (valor === 2) {
    return <h2>Categories</h2>
  } else if (valor === 3) {
    return <ShowOrders orderss={orderss} />
  } else if (valor === 4) {
    return <h2>Users</h2>
  } else if (valor === 5) {
    return <h2>Profile</h2>
  }
}

export function App () {
  const elementss = elementos.inventory
  const [view, setview] = useState(0)
  // const [inventory, setinventory] = useState(null)

  const orderss = ordersss.orders
  return (
    <main>
      <BarNav setview={setview} />
      <Vistas valor={view} elementss={elementss} orderss={orderss} />
    </main>
  )
}

import './App.css'
import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
// import { Inventory } from './components/Show/inventory'

// Esto si funciona
import { SearchBar } from './components/SearchBar/searchbar'
import elementos from './mocks/Elementos.json'
import { ShowCards } from './components/Cards/Cards'
import ordersss from './mocks/Orders.json'
import { ShowOrders } from './components/orders/Orders'
import { Profileview } from './components/Profile/profile'
import filterss from './mocks/Ordersfilters.json'
import userfil from './mocks/usersfilters.json'

function Vistas ({ valor, elementss, orderss }) {
  if (valor === 0) {
    return <h2>Dashboards</h2>
  } else if (valor === 1) {
    return <ShowCards elementss={elementss} />
  } else if (valor === 2) {
    return (
      <div>
        <SearchBar filters={filterss.orderFilters} />
        <ShowOrders orderss={orderss} />
      </div>
    )
  } else if (valor === 3) {
    return (
      <SearchBar filters={userfil.UserFilters} />
    )
  } else if (valor === 4) {
    return (
      <Profileview />
    )
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

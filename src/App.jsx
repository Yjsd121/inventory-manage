import './App.css'
import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
import { Vistas } from './Router/Vistas'
// Esto si funciona

import elementos from './mocks/Elementos.json'
import ordersss from './mocks/Orders.json'

export function App () {
  const elementss = elementos.inventory
  const [view, setview] = useState(0)

  const orderss = ordersss.orders
  return (
    <main>
      <BarNav view={view} setview={setview} />
      <Vistas valor={view} elementss={elementss} orderss={orderss} />
    </main>
  )
}

import './App.css'
import { useState, useEffect } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
import { Vistas } from './Router/Vistas'
// Esto si funciona

import elementos from './mocks/Elementos.json'
import ordersss from './mocks/Orders.json'

export function App () {
  const elementss = elementos.inventory
  const [view, setview] = useState(0)
  const [selectedfilters, setFilters] = useState({})

  useEffect(() => {
    console.log(selectedfilters)
  }, [selectedfilters])

  const orderss = ordersss.orders
  return (
    <main>
      <BarNav view={view} setview={setview} />
      <Vistas valor={view} elementss={elementss} orderss={orderss} setFilters={setFilters} />
    </main>
  )
}

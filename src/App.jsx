import './App.css'
// import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
// import { Inventory } from './components/Show/inventory'
import elementos from './mocks/Elementos.json'
import { ShowCards } from './components/Cards/Cards'

export function App () {
  const elementss = elementos.inventory
  // const [inventory, setinventory] = useState(null)
  return (
    <main>
      <BarNav />
      <ShowCards elementss={elementss} />
    </main>
  )
}

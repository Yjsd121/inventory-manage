import './App.css'
// import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
// import { Inventory } from './components/Show/inventory'
import elementos from './mocks/Elementos.json'

export function App () {
  const elementss = elementos.inventory
  // const [inventory, setinventory] = useState(null)
  const hasinventory = elementss?.length > 0
  return (
    <main>
      <BarNav />
      {
        hasinventory
          ? (
              elementss.map(ele => (
                <li key={ele.id}>
                  <p>{ele.name}</p>
                </li>
              ))
            )
          : <h1> No hay inventario</h1>
      }
    </main>
  )
}

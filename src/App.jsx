import './App.css'
// import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
// import { Inventory } from './components/Show/inventory'
import elementos from './mocks/Elementos.json'
import { Cards } from './components/Cards/Cards'

export function App () {
  const elementss = elementos.inventory
  // const [inventory, setinventory] = useState(null)
  const hasinventory = elementss?.length > 0
  return (
    <main>
      <BarNav />
      <div className='show'>
        <div className='searching'>
          <input type='text' />
          <button>
            Search
          </button>
        </div>
        {
          hasinventory
            ? <Cards Item={elementss} />
            : <h1> No hay inventario</h1>
        }
      </div>
    </main>
  )
}

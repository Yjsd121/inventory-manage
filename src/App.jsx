import './App.css'
// import { useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
// import { Inventory } from './components/Show/inventory'

// Esto si funciona
// import elementos from './mocks/Elementos.json'
// import { ShowCards } from './components/Cards/Cards'
import ordersss from './mocks/Orders.json'
export function App () {
  // Esto tambien funciona
  // const elementss = elementos.inventory
  // const [inventory, setinventory] = useState(null)

  const orderss = ordersss.orders
  const hasorders = orderss?.length > 0
  return (
    <main>
      <BarNav />
      {/* <ShowCards elementss={elementss} /> */}
      <section className='orders'>
        <div className='ShowOrders'>
          <h2>Pending Orders</h2>
          {
            hasorders
              ? (
                  orderss.map(order => (
                    <div key={order.id} className='order-card'>
                      <h4>{order.id}</h4>
                      <p>Producto: {order.product}</p>
                      <p>Cantidad: {order.quantity}</p>
                      {/* <p>Tel: {order.phone}</p>
                      <p>Dirección: {order.address}</p> */}
                      <p>Estado: {order.status}</p>
                      <button> View </button>
                    </div>
                  ))
                )
              : (
                <h2>No hay órdenes</h2>
                )
          }
          <button>Create Order</button>
        </div>
      </section>
    </main>
  )
}

import './Orders.css'
export function Orderlist ({ orderss }) {
  return (
    orderss.map(order => (
      <div key={order.id} className='order-card'>
        <h4>{order.id}</h4>
        <p>Producto: {order.product}</p>
        <p>Cantidad: {order.quantity}</p>
        <p>Estado: {order.status}</p>
        <button> View </button>
      </div>
    ))
  )
}
function Orders ({ orderss }) {
  const hasorders = orderss?.length > 0
  return (
    hasorders
      ? <Orderlist orderss={orderss} />
      : (
        <h2>No hay órdenes</h2>
        )
  )
}

export function ShowOrders ({ orderss }) {
  return (
    <section className='orders'>
      <div className='color'>
        <h2>Pending Orders</h2>
        <div className='ShowOrders'>
          <Orders orderss={orderss} />
        </div>
        <button>Create Order</button>
      </div>
    </section>
  )
}

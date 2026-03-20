import './Orders.css'
import { useAppContext } from '../context/TrialContext'

export function Orderlist({ orderss, selectedfilters }) {
  return (
    orderss.filter(order => {
      return ((order.Status === selectedfilters.status || selectedfilters.status === 'all') &&
        (order.Price === selectedfilters.Price || selectedfilters.Price === 'all'))
    }).map(order => (
      <div key={order.Id} className='order-card'>
        <h4>{order.Id}</h4>
        <p>Producto: {order.Product}</p>
        <p>Cantidad: {order.Quantity}</p>
        <p>Estado: {order.Status}</p>
        <button> View </button>
      </div>
    ))
  )
}
function Orders({ orderss, selectedfilters }) {
  const hasorders = orderss?.length > 0
  return (
    hasorders
      ? <Orderlist orderss={orderss} selectedfilters={selectedfilters} />
      : (
        <h2>No hay órdenes</h2>
      )
  )
}

export function ShowOrders() {
  const { selectedfilters, SelectedData } = useAppContext();
  return (
    <section className='orders'>
      <div className='color'>
        <h2>Pending Orders</h2>
        <div className='ShowElements Orders'>
          <Orders orderss={SelectedData} selectedfilters={selectedfilters} />
        </div>
        <button>Create Order</button>
      </div>
    </section>
  )
}
